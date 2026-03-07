import React from "react";

const EmployeeItemAI = ({ employee, onDelete, onEdit }) => {
    return (
        <div
            style={{
                background: "#ffffff",
                padding: "18px 22px",
                borderRadius: "12px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                marginBottom: "14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #eee"
            }}
        >
            {/* INFO EMPLEADO */}
            <div>
                <h3 style={{ margin: "0 0 6px 0", color: "#333" }}>
                    {employee.name}
                </h3>

                <p style={{ margin: "2px 0", color: "#555" }}>
                    <strong>Edad:</strong> {employee.edad || "No especificada"}
                </p>

                <p style={{ margin: "2px 0", color: "#555" }}>
                    <strong>Rol:</strong> {employee.rol || "No especificado"}
                </p>

                <p style={{ margin: "2px 0", color: "#555" }}>
                    <strong>Correo:</strong> {employee.correo || "No especificado"}
                </p>
            </div>

            {/* BOTONES */}
            <div style={{ display: "flex", gap: "10px" }}>
                <button
                    onClick={onEdit}
                    style={{
                        background: "#f4b400",
                        color: "white",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500"
                    }}
                >
                    Editar
                </button>

                <button
                    onClick={onDelete}
                    style={{
                        background: "#e53935",
                        color: "white",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500"
                    }}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default EmployeeItemAI;