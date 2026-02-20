import React, { useEffect, useState } from 'react'
import { bancos } from '../data/bancos'

type Banco = {
    id: number
    name: string
    country: string
}

export default function BancosComponent() {

    const [data, setData] = useState<Banco[]>([])

    // Simulamos un fetch
    useEffect(() => {
        setData(bancos)
    }, [])

    return (
        <div>
            <h2>Lista de Bancos</h2>

            {data.map((banco) => (
                <div key={banco.id}>
                    <p>{banco.name} - {banco.country}</p>
                </div>
            ))}
        </div>
    )
}