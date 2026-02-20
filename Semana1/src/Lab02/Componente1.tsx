import React from 'react'
import { useEffect, useState } from 'react'

export default function Componente1() {

    const [ pokemon, setPokemon]= useState('charmander')
    const [ data, setData ] = useState<any>(null)
    const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(info => setData(info))
            .catch(err => console.log(err))
    }, [pokemon])
    
    return (
        <div>
            <h2>Buscar pokémon</h2>
            <input type='text' 
                placeholder='Nombre pokémon' 
                onChange={(e) => setPokemon(e.target.value)}
            />
            {data && (
                <div>
                    <h3>{data.name}</h3>
                    <img src={data.sprites.front_default} alt={data.name} />
                    <p>Peso: {data.weight}</p>
                    <p>Altura: {data.height}</p>
                </div>
            )}
        </div>
    )
}
