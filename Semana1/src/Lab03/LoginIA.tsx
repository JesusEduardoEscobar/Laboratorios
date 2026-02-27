import { useState, useEffect, useRef } from "react";

/* ============================
   Hook personalizado useFocus
============================ */
function useFocus<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const setFocus = () => {
    ref.current?.focus();
  };

  return { ref, setFocus };
}

function LoginIA() {
  /* ============================
     Estados (useState)
  ============================ */
  const [matricula, setMatricula] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [apellidos, setApellidos] = useState<string>("");
  const [edad, setEdad] = useState<string>("");
  const [universidad, setUniversidad] = useState<string>("");
  const [carrera, setCarrera] = useState<string>("");

  const [enviadoIA, setEnviadoIA] = useState<boolean>(false);

  /* ============================
     Hook useFocus
  ============================ */
  const { ref: matriculaRef, setFocus } = useFocus<HTMLInputElement>();

  /* ============================
     useEffect
  ============================ */
  useEffect(() => {
    // Cuando cargue la página, enfocar el primer input
    setFocus();
  }, []);

  useEffect(() => {
    if (enviadoIA) {
      console.log("Formulario enviadoIA correctamente");
    }
  }, [enviadoIA]);

  /* ============================
     Función enviar
  ============================ */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviadoIA(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Formulario de Alumno Con IA</h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={matriculaRef}
          type="text"
          placeholder="Matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Universidad"
          value={universidad}
          onChange={(e) => setUniversidad(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Carrera"
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
        />
        <br /><br />

        <button type="submit">Enviar</button>
      </form>

      {enviadoIA && (
        <div style={{ marginTop: "20px" }}>
          <h3>Datos ingresados:</h3>
          <p><strong>Matrícula:</strong> {matricula}</p>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Apellidos:</strong> {apellidos}</p>
          <p><strong>Edad:</strong> {edad}</p>
          <p><strong>Universidad:</strong> {universidad}</p>
          <p><strong>Carrera:</strong> {carrera}</p>
        </div>
      )}
    </div>
  );
}

export default LoginIA;