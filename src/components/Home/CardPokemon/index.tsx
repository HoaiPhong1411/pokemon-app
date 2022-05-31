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
  // const handleDetail = (idItem: number) => {
  //   setViewDetail({ ...viewDetail, id: idItem });
  //   if (!viewDetail.isOpened) {
  //     setViewDetail({ ...viewDetail, isOpened: true });
  //   }
  // };
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
              // onClick={(idItem) => handleDetail(item.id)}
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
