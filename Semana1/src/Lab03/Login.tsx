import React from 'react'
import { useEffect, useState, useRef } from 'react'

type FormData = {
  matricula: string;
  nombre: string;
  apellidos: string;
  edad: number;
  universidad: string;
  carrera: string;
};

export default function Login() {
    const [formData, setFormData] = useState<FormData>({
        matricula: "",
        nombre: "",
        apellidos: "",
        edad: 0,
        universidad: "",
        carrera: "",
    });

    const [enviado, setEnviado] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if(enviado) {
            console.log("Datos enviado de forma correcta");
        }
    }, [enviado]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEnviado(true);
    }

    return (
        <div style={{padding: "20px", fontFamily:"sans-serif"}}>
            <h2>Formulario:</h2>
            <form onSubmit={handlesubmit}>
                <input
                    ref={inputRef} 
                    type="text" 
                    name='matricula'
                    placeholder='Matricula'
                    value={formData.matricula}
                    onChange={handleChange}
                />
                <br />
                <input
                    ref={inputRef} 
                    type="text" 
                    name='nombre'
                    placeholder='Nombre'
                    value={formData.nombre}
                    onChange={handleChange}
                />
                <br />
                <input
                    ref={inputRef} 
                    type="text" 
                    name='apellidos'
                    placeholder='Apellidos'
                    value={formData.apellidos}
                    onChange={handleChange}
                />
                <br />
                <input
                    ref={inputRef} 
                    type="number" 
                    name='edad'
                    placeholder='Edad'
                    value={formData.edad}
                    onChange={handleChange}
                />
                <br />
                <input
                    ref={inputRef} 
                    type="text" 
                    name='universidad'
                    placeholder='Universidad'
                    value={formData.universidad}
                    onChange={handleChange}
                />
                <br />
                <input
                    ref={inputRef} 
                    type="text" 
                    name='carrera'
                    placeholder='Carrera'
                    value={formData.carrera}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Enviar</button>
            </form>
            {enviado && (
                <div style={{ margin: "20px" }}>
                    <h3>Datos del alumno</h3>
                    {Object.entries(formData).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key}:</strong> {value}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}