import React from 'react';
import ReactFlipCard from "reactjs-flip-card";
import AnimeCardFront from "@/components/AnimeCardFront";
import AnimeCardBack from "@/components/AnimeCardBack";

const AnimeCard = ({anime}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    setTimeout(() => {
        setIsFlipped(true);
    }, 2300);

    const imgClassName = "w-full h-full object-cover";

    const cardClassName = "w-60 h-96 rounded-md overflow-clip";

    const style = {"--rotate-angle": `${Math.random() * 10 - 5}deg`};

    const handleClick = (e) => {
        e.preventDefault();
        window.open(`https://anilist.co/anime/${anime.id}`, "_blank");
    }

    const name = anime.title.english || anime.title.romaji;

    return (
        <div className="anime-card fixed left-1/2 bottom-[30%] z-10" style={style}>
            <ReactFlipCard
                direction="horizontal"
                flipTrigger="disabled"
                flipByProp={isFlipped}
                frontComponent={
                    <AnimeCardFront
                        cardClassName={cardClassName}
                        imgClassName={imgClassName}
                    />
                }
                backComponent={
                    <AnimeCardBack
                        anime={anime}
                        cardClassName={cardClassName}
                        imgClassName={imgClassName}
                        handleClick={handleClick}
                        name={name}
                    />
                }
            />
        </div>
    );
};

export default AnimeCard;