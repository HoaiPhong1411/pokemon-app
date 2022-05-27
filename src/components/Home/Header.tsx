import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { clientApi } from "../../configApi/api";
import { Pokemon, PokemonDetail } from "../../interface";
import CardPokemon from "./CardPokemon";
import _ from "lodash";
import { Box, CircularProgress } from "@mui/material";
import { viewDetail } from "../../interface";

interface Pokemons {
  name: string;
  url: string;
}

const Header: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonDetail[]>([]);
  const [nextPage, setNextPage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [viewDetail, setViewDetail] = useState<viewDetail>({
    id: 0,
    isOpened: false,
  });

  const qPokemons = useQuery(
    ["qPokemons"],
    async () => {
      return await clientApi.getAll(
        "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
      );
    },
    {
      keepPreviousData: true,
      onError: (err: any) => {},
      onSuccess: (res: any) => {
        setPokemon([]);
        setNextPage(res.data.next);

        res.data.results.forEach(async (item: PokemonDetail) => {
          const poke = await clientApi.getByName(item.name);

          setPokemon((p) => [...p, poke.data]);
        });
      },
    }
  );

  const nextnextPage = async () => {
    setLoading(true);
    const res = await clientApi.getAll(nextPage);
    setNextPage(res.data.next);

    await res.data.results.forEach(async (item: PokemonDetail) => {
      const poke = await clientApi.getByName(item.name);
      setPokemon((p) => [...p, poke.data]);
      setLoading(false);
    });
    setTimeout(() => {
      window.scrollTo({
        top: document.querySelector(".container")?.clientHeight,
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <>
      <div className="container">
        <header className="pokemon-header ">Pokemon</header>

        <CardPokemon
          pokemons={pokemon}
          viewDetail={viewDetail}
          setViewDetail={setViewDetail}
        />
        {loading && <CircularProgress />}
        <div id="bottom-scroll" className="btn">
          <button onClick={nextnextPage}>
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
