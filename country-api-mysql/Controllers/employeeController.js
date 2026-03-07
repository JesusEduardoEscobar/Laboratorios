const pool = require('../db');

// Obtener todos los empleados
exports.getAllEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleados ORDER BY name');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los empleados:', error);
        res.status(500).json({ error: 'Error al obtener los empleados' });
    }
};

// Obtener un empleado por ID
exports.getEmployeeById = async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT * FROM empleados WHERE id_emp = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener el empleado:', error);
        res.status(500).json({ error: 'Error al obtener el empleado' });
    }
};

// Crear un nuevo empleado
exports.createEmployee = async (req, res) => {
    const { name, edad, rol, correo } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'El nombre del empleado es obligatorio' });
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO empleados (name, edad, rol, correo) VALUES (?, ?, ?, ?)',
            [name, edad, rol, correo]
        );

        res.status(201).json({
            id_emp: result.insertId,
            name,
            edad,
            rol,
            correo
        });

    } catch (error) {
        console.error('Error al crear el empleado:', error);
        res.status(500).json({ error: 'Error al crear el empleado' });
    }
};

// Actualizar un empleado
exports.updateEmployee = async (req, res) => {
    const { name, edad, rol, correo } = req.body;
    const employeeId = req.params.id;

    if (!name) {
        return res.status(400).json({ error: 'El nombre del empleado es obligatorio' });
    }

    try {
        const [check] = await pool.query(
            'SELECT * FROM empleados WHERE id_emp = ?',
            [employeeId]
        );

        if (check.length === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        await pool.query(
            'UPDATE empleados SET name = ?, edad = ?, rol = ?, correo = ? WHERE id_emp = ?',
            [name, edad, rol, correo, employeeId]
        );

        res.json({
            id_emp: employeeId,
            name,
            edad,
            rol,
            correo
        });

    } catch (error) {
        console.error('Error al actualizar el empleado:', error);
        res.status(500).json({ error: 'Error al actualizar el empleado' });
    }
};

// Eliminar empleado
exports.deleteEmployee = async (req, res) => {
    const employeeId = req.params.id;

    try {
        const [check] = await pool.query(
            'SELECT * FROM empleados WHERE id_emp = ?',
            [employeeId]
        );

        if (check.length === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        await pool.query(
            'DELETE FROM empleados WHERE id_emp = ?',
            [employeeId]
        );

        res.json({ message: 'Empleado eliminado con éxito' });

    } catch (error) {
        console.error('Error al eliminar el empleado:', error);
        res.status(500).json({ error: 'Error al eliminar el empleado' });
    }
};