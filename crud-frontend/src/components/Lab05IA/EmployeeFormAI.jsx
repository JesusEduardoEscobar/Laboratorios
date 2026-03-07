import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee } from "../../services/apiemployee";

const EmployeeFormIA = ({ employee, onSubmitSuccess, onCancel }) => {

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

        <form
            onSubmit={handleSubmit}
            style={{
                background: "#7e7e7e",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                marginBottom: "20px"
            }}
        >

            {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

            <div style={{ margin: "20px", padding: "20px" }}>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={submitting}
                    required
                     style={{
                        width: "90%",
                        padding: "15px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        fontSize: "16px"
                    }}
                />
            </div>

            <div style={{ margin: "20px", padding: "20px" }}>
                <label>Edad:</label>
                <input
                    type="number"
                    name="edad"
                    value={formData.edad}
                    onChange={handleChange}
                    disabled={submitting}
                     style={{
                        width: "90%",
                        padding: "15px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        fontSize: "16px"
                    }}
                />
            </div>

            <div style={{ margin: "20px", padding: "20px" }}>
                <label>Rol usuario:</label>
                <input
                    type="text"
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    disabled={submitting}
                     style={{
                        width: "90%",
                        padding: "15px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        fontSize: "16px"
                    }}
                />
            </div>

            <div style={{ margin: "20px", padding: "20px" }}>
                <label>Correo:</label>
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    disabled={submitting}
                     style={{
                        width: "90%",
                        padding: "15px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        fontSize: "16px"
                    }}
                />
            </div>

            <div style={{ marginTop: "10px" }}>
                <button
                    type="submit"
                    disabled={submitting}
                    style={{
                        background: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        marginRight: "10px",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    {submitting ? 'Guardando...' : employee ? 'Actualizar' : 'Crear'}
                </button>

                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        style={{
                            background: "#6c757d",
                            color: "white",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        Cancelar
                    </button>
                )}
            </div>

        </form>
    );
};

export default EmployeeFormIA;