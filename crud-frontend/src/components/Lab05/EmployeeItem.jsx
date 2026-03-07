import React from 'react';

const EmployeeItem = ({ employee, onDelete, onEdit }) => {
    return (
        <div className="employee-item">

            <div className="employee-info">
                <h3>{employee.name}</h3>

                <p>
                    <strong>Edad:</strong> {employee.edad || 'No especificada'}
                </p>

                <p>
                    <strong>Rol:</strong> {employee.rol || 'No especificado'}
                </p>

                <p>
                    <strong>Correo:</strong> {employee.correo || 'No especificado'}
                </p>
            </div>

            <div className="employee-actions">
                <button onClick={onEdit} className="edit-btn">
                    Editar
                </button>

                <button onClick={onDelete} className="delete-btn">
                    Eliminar
                </button>
            </div>

        </div>
    );
};

export default EmployeeItem;