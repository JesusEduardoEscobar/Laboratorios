import React from 'react'
import { bancos } from '../data/bancos'

function Componente3() {
  return (
    <div>
        <h1>Compoenete 3: lista de bancos</h1>
        {bancos.map((a => (
            <li key={a.id}>{a.id} - {a.name} - {a.country}</li>
        )))}
    </div>
  )
}

export default Componente3