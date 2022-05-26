import React, { useState } from "react";
import { useQuery } from "react-query";
import { clientApi } from "../../configApi/api";
import { Pokemon } from "../../interface";
import CardPokemon from "./CardPokemon";
import _ from "lodash";

interface Pokemons {
  name: string;
  url: string;
}

const Header: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const qPokemons = useQuery(
    ["qPokemons"],
    async () => {
      return await clientApi.getAll();
    },
    {
      keepPreviousData: true,
      onError: (err: any) => {},
      onSuccess: (res: any) => {
        res.data.results.forEach(async (item: Pokemons) => {
          const poke = await clientApi.getByName(item.name);
          setPokemon((p) => [...p, poke.data]);
        });
      },
    }
  );

  return (
    <>
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <CardPokemon pokemons={pokemon} />
      </div>
    </>
  );
};

export default Header;
