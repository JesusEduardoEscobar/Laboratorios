import React from 'react'

function Componente2() {
    const saludo = "Hola gente"
    const nombre = "Jesus Eduardo"
    return (
        <div>
            <h1>Comoponente 2 con el uso de variables</h1>
            <br/>
            Componente:
                {saludo} del Tec <br/>
                Mi nombre es: {nombre}
            <br/>
        </div>
    )
}

export default Componente2