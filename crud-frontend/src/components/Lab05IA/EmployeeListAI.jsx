import React, { useState, useEffect } from 'react';
import { getEmployees, deleteEmployee } from "../../services/apiemployee";
import EmployeeItemAI from './EmployeeItemAI';
import EmployeeFormAI from './EmployeeFormAI';

const EmployeeListAI = () => {

    const [employees, setEmployees] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchEmployees = async () => {

        setLoading(true);

        try {

            const data = await getEmployees();

            setEmployees(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchEmployees();

    }, []);

    const handleDelete = async (id) => {

        if (window.confirm("¿Eliminar empleado?")) {

            await deleteEmployee(id);

            fetchEmployees();

        }

    };

    const handleEdit = (id) => {

        setEditingId(id);

    };

    const handleCancel = () => {

        setEditingId(null);

    };

    const handleSuccess = () => {

        fetchEmployees();

        setEditingId(null);

    };

    return (

        <div
            style={{
                maxWidth: "800px",
                margin: "40px auto",
                fontFamily: "Arial"
            }}
        >

            <h1 style={{ textAlign: "center" }}>
                Sistema de Empleados
            </h1>

            {!editingId && (
                <EmployeeFormAI onSubmitSuccess={handleSuccess} />
            )}

            {loading ? (

                <p>Cargando...</p>

            ) : (

                employees.map((employee) => (

                    <div key={employee.id_emp}>

                        {editingId === employee.id_emp ? (

                            <EmployeeFormAI
                                employee={employee}
                                onSubmitSuccess={handleSuccess}
                                onCancel={handleCancel}
                            />

                        ) : (

                            <EmployeeItemAI
                                employee={employee}
                                onDelete={() => handleDelete(employee.id_emp)}
                                onEdit={() => handleEdit(employee.id_emp)}
                            />

                        )}

                    </div>

                ))

            )}

        </div>

    );

};

export default EmployeeListAI;