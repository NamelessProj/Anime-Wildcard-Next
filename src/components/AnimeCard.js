import React from 'react';
import ReactFlipCard from "reactjs-flip-card";
import AnimeCardFront from "@/components/AnimeCardFront";
import AnimeCardBack from "@/components/AnimeCardBack";

const AnimeCard = ({anime, blurhash}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    // Flip the card after 2.3 seconds
    setTimeout(() => {
        setIsFlipped(true);
    }, 2300);

    const imgClassName = "w-full h-full object-cover";

    const cardClassName = "w-60 h-96 rounded-md overflow-clip";

    // Randomly rotate the card
    const style = {"--rotate-angle": `${Math.random() * 10 - 5}deg`};

    // Open the anime page on AniList
    const handleClick = (e) => {
        e.preventDefault();
        window.open(`https://anilist.co/anime/${anime.id}`, "_blank");
    }

    // Get the anime name
    const name = anime.title.english || anime.title.romaji;

    return (
        <div className="anime-card fixed left-1/2 bottom-[50px] z-10" style={style}>
            <ReactFlipCard
                direction="horizontal"
                flipTrigger="disabled"
                flipByProp={isFlipped}
                containerCss="w-60 h-96"
                frontComponent={
                    <AnimeCardFront
                        cardClassName={cardClassName}
                        imgClassName={imgClassName}
                        blurhash={blurhash}
                    />
                }
                backComponent={
                    <AnimeCardBack
                        anime={anime}
                        cardClassName={cardClassName}
                        imgClassName={imgClassName}
                        handleClick={handleClick}
                        name={name}
                        blurhash={blurhash}
                    />
                }
            />
        </div>
    );
};

export default AnimeCard;