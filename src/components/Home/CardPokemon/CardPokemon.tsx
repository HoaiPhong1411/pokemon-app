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

  // useEffect(() => {
  //   setSelected(id === viewDetail.id);
  // }, [viewDetail]);
  // console.log(isSelected);
  const elementDetail = document.getElementById(`${id}`);

  const closeDetail = () => {
    setViewDetail({
      id: 0,
      isOpened: false,
    });
    if (elementDetail) {
      console.log("remove");

      elementDetail.classList.remove("scale-out-card");
      elementDetail.classList.add("scale-in-card");
    }
  };

  const handleUnHover = (e: any) => {
    e.target.classList.remove("scale-in");
    e.target.classList.add("scale-out");
  };

  const handleHover = (e: any) => {
    e.target.classList.add("scale-in");
    e.target.classList.remove("scale-out");
  };

  const handleDetail = (idItem: number) => {
    setViewDetail({ ...viewDetail, id: idItem });

    if (!viewDetail.isOpened) {
      setViewDetail({ ...viewDetail, isOpened: true });
    }
    setSelected(true);
    if (elementDetail) {
      console.log("add");
      elementDetail.classList.remove("scale-in-card");
      elementDetail.classList.add("scale-out-card");
    }
  };

  return (
    <>
      <section
        onClick={(idItem) => handleDetail(id)}
        className="pokemon-list-container relative visible"
        id={`pokemon-${id}`}
      >
        <p className="pokemon-name">{name}</p>
        <img
          onMouseLeave={(e) => handleUnHover(e)}
          onMouseOver={(e) => handleHover(e)}
          src={image}
          alt=""
        />
        <section
          id={`${id}`}
          className="pokemon-list-detailed absolute top-[-45%] left-[-45%] z-[1000] "
        >
          <div className="detail-container">
            <div onClick={closeDetail} className="detail-close">
              X
            </div>
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
