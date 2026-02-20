import React, { useEffect, useState } from "react";

type PokemonData = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

type Props = {
  pokemonName: string;
};

const PokemonCard: React.FC<Props> = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
        );

        if (!res.ok) {
          throw new Error("Pokémon no encontrado");
        }

        const data: PokemonData = await res.json();
        setPokemon(data);
        setError("");
      } catch (err) {
        setError("Error al obtener el Pokémon");
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };

    if (pokemonName) {
      fetchPokemon();
    }
  }, [pokemonName]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!pokemon) return null;

  return (
    <div className="p-4 border rounded-xl shadow-md w-64 text-center">
      <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>
        Tipo:
        {pokemon.types.map((t, index) => (
          <span key={index}> {t.type.name} </span>
        ))}
      </p>
    </div>
  );
};

export default PokemonCard;