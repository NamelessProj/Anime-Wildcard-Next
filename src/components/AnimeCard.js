import React from 'react';
import ReactFlipCard from "reactjs-flip-card";
import AnimeCardFront from "@/components/AnimeCardFront";
import AnimeCardBack from "@/components/AnimeCardBack";

const AnimeCard = ({className="anime-card fixed left-1/2 bottom-[50px] z-10", doRotate=true, type="anime", displayInt, timeBeforeFlip=2300, anime, frontImage, blurhash}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const [style, setStyle] = React.useState({});

    // Rotate the card randomly
    React.useEffect(()  => {
        if(doRotate) setStyle({"--rotate-angle": `${Math.random() * 10 - 5}deg`});
    }, [doRotate]);

    // Flip the card after 2.3 seconds (timeBeforeFlip)
    setTimeout(() => setIsFlipped(true), timeBeforeFlip);

    const imgClassName = "w-full h-full object-cover";

    const cardClassName = "w-[17rem] h-96 rounded-md overflow-clip";

    // Open the anime page on AniList
    const handleClick = (e) => {
        e.preventDefault();
        window.open(`https://anilist.co/${type}/${anime.id}`, "_blank");
    }

    // Get the anime name
    const name = anime.title.english || anime.title.romaji;

    return (
        <div className={className} style={style}>
            <ReactFlipCard
                direction="horizontal"
                flipTrigger="disabled"
                flipByProp={isFlipped}
                containerCss="w-[17rem] h-96"
                frontComponent={
                    <AnimeCardFront
                        cardClassName={cardClassName}
                        imgClassName={imgClassName}
                        frontImage={frontImage}
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
                        displayInt={displayInt}
                    />
                }
            />
        </div>
    );
};

export default AnimeCard;