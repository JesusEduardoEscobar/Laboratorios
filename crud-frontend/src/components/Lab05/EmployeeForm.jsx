import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee } from '../../services/apiemployee.js';

const EmployeeForm = ({ employee, onSubmitSuccess, onCancel }) => {

    const [formData, setFormData] = useState({
        name: '',
        edad: '',
        rol: '',
        correo: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name || '',
                edad: employee.edad || '',
                rol: employee.rol || '',
                correo: employee.correo || ''
            });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setError('El nombre del empleado es obligatorio');
            return;
        }

        setSubmitting(true);
        setError(null);

        try {

            if (employee) {
                await updateEmployee(employee.id_emp, formData);
            } else {
                await createEmployee(formData);
            }

            setFormData({
                name: '',
                edad: '',
                rol: '',
                correo: ''
            });

            if (onSubmitSuccess) onSubmitSuccess();

        } catch (err) {
            setError('Error al guardar el empleado');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="employee-form">

            {error && <div className="error">{error}</div>}

            <div className="form-group">
                <label htmlFor="name">Nombre*:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="edad">Edad:</label>
                <input
                    type="number"
                    id="edad"
                    name="edad"
                    value={formData.edad}
                    onChange={handleChange}
                    disabled={submitting}
                />
            </div>

            <div className="form-group">
                <label htmlFor="rol">Rol:</label>
                <input
                    type="text"
                    id="rol"
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    disabled={submitting}
                />
            </div>

            <div className="form-group">
                <label htmlFor="correo">Correo:</label>
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    disabled={submitting}
                />
            </div>

            <div className="form-actions">

                <button type="submit" disabled={submitting}>
                    {submitting ? 'Guardando...' : employee ? 'Actualizar' : 'Crear'}
                </button>

                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={submitting}
                    >
                        Cancelar
                    </button>
                )}

            </div>

        </form>
    );
};

export default EmployeeForm;