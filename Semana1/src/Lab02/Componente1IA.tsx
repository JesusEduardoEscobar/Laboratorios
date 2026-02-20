import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

export default function Componente1IA() {
  const [name, setName] = useState("pikachu");

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre del Pokémon"
        onChange={(e) => setName(e.target.value)}
      />

      <PokemonCard pokemonName={name} />
    </div>
  );
}