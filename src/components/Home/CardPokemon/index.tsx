import React from "react";
import { Pokemon } from "../../../interface";
import pokemonList from "../pokemonList";

interface CardPokemonProps {
  pokemons: Pokemon[];
}
const CardPokemon = ({ pokemons }: CardPokemonProps) => {
  return (
    <>
      <section className="collection-container">
        {pokemons.map((item) => {
          return <div className=""></div>;
        })}
      </section>
    </>
  );
};

export default CardPokemon;
