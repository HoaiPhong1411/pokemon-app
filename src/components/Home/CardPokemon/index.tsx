import React from "react";
import { Pokemon, PokemonDetail, viewDetail } from "../../../interface";
import pokemonList from "../pokemonList";
import Card from "./CardPokemon";
import "./Card.css";

interface CardPokemonProps {
  pokemons: PokemonDetail[];
  viewDetail: viewDetail;
  setViewDetail: React.Dispatch<React.SetStateAction<viewDetail>>;
}
const CardPokemon = ({
  pokemons,
  viewDetail,
  setViewDetail,
}: CardPokemonProps) => {
  const handleDetail = (id: number) => {
    // setTimeout(() => {
    //   window.scrollTo({
    //     top: document.querySelector(".container")?.clientHeight,
    //     behavior: "smooth",
    //   });
    // }, 400);
    if (!viewDetail.isOpened) {
      setViewDetail({ id, isOpened: true });
    }
  };

  return (
    <>
      <section
        className={
          viewDetail.isOpened
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {pokemons.map((item: any) => {
          return (
            <div
              key={item.id}
              className=""
              onClick={() => handleDetail(item.id)}
            >
              <Card
                viewDetail={viewDetail}
                setViewDetail={setViewDetail}
                id={item.id}
                abilities={item.abilities}
                name={item.name}
                image={item.sprites.front_default}
              />
            </div>
          );
        })}
        {/* {viewDetail.isOpened ? <div className="overlay"></div> : <div></div>} */}
      </section>
    </>
  );
};

export default CardPokemon;
