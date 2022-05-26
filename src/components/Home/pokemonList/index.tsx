import React from "react";

interface Props {
  id: number;
  name: string;
  image: string;
}

const pokemonList: React.FC<Props> = (props) => {
  const { id, name, image } = props;
  return <div>index</div>;
};

export default pokemonList;
