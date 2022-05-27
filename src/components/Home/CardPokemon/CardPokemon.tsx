import React, { memo, useEffect, useState } from "react";
import { viewDetail } from "../../../interface";

interface Props {
  id: number;
  name: string;
  image: string;
  abilities:
    | {
        ability: {
          name: string;
          url: string;
        };
      }[]
    | undefined;
  viewDetail: viewDetail;
  setViewDetail: React.Dispatch<React.SetStateAction<viewDetail>>;
}

const CardPokemon = ({
  id,
  name,
  image,
  abilities,
  viewDetail,
  setViewDetail,
}: Props) => {
  const [isSelected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    console.log(id, viewDetail.id);

    setSelected(id === viewDetail.id);
  }, [viewDetail]);
  const pkmList = document.querySelector(".pokemon-list-detailed");
  const closeDetail = () => {
    setViewDetail({
      id: 0,
      isOpened: false,
    });
    setSelected(false);
  };

  const handleUnHover = (e: any) => {
    e.target.classList.remove("scale-in");
    e.target.classList.add("scale-out");
  };

  const handleHover = (e: any) => {
    e.target.classList.add("scale-in");
    e.target.classList.remove("scale-out");
  };

  return (
    <>
      <section className="pokemon-list-container relative" id={`pokemon-${id}`}>
        <p className="pokemon-name">{name}</p>
        <img
          onMouseLeave={(e) => handleUnHover(e)}
          onMouseOver={(e) => handleHover(e)}
          src={image}
          alt=""
        />
        {/* {isSelected ? ( */}
        <section
          style={
            isSelected
              ? { animation: "scaleInCard 0.5s forwards !important" }
              : { transform: "scaleOutCard 0.5s forwards !important" }
          }
          className="pokemon-list-detailed absolute top-[-45%] left-[-45%] z-[1000] "
        >
          <div className="detail-container">
            <p onClick={closeDetail} className="detail-close">
              X
            </p>
            <div className="detail-info">
              <img src={image} alt="" className="detail-image" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">Ability:</p>
              {abilities?.map((item) => (
                <div>{item.ability.name}</div>
              ))}
            </div>
          </div>
        </section>
        {/* ) : null} */}
      </section>
    </>
  );
};

export default memo(CardPokemon);
