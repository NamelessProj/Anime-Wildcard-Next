import React from 'react';
import ReactFlipCard from "reactjs-flip-card";
import Image from "next/image";
import Tooltip from "rc-tooltip";

const TopCard = ({index, anime, handler, blurhash}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const [name, setName] = React.useState(index + 1);

    // Set the name and flip the card when the anime is loaded
    React.useEffect(() => {
        if(anime){
            setName(anime.media.title.english || anime.media.title.romaji);
            setIsFlipped(true);
        }
    }, [anime]);

    // Set the back card image
    const backCard = `/card_back_${index + 1}.jpg`;

    const imgProps = {
        className: "w-full h-full rounded-[5px] overflow-clip object-cover",
        width: 96,
        height: 144,
    }

    const typoProps = {
        className: "text-base font-bold text-nowrap whitespace-nowrap overflow-clip text-ellipsis",
    }

    return (
        <Tooltip placement="bottom" trigger={['hover']} overlay={<span className="text-base">{name}</span>}>
            <button
                type="button"
                onClick={handler}
                className="w-24"
            >
                <div className="mb-2">
                    <ReactFlipCard
                        direction="horizontal"
                        flipTrigger="disabled"
                        flipByProp={isFlipped}
                        containerCss="w-24 h-[8.4rem]"
                        frontComponent={
                            <Image
                                {...imgProps}
                                src={backCard}
                                placeholder="blur"
                                blurDataURL={blurhash}
                                alt=""
                            />
                        }
                        backComponent={
                            <Image
                                {...imgProps}
                                src={anime ? anime.media.coverImage.large : backCard}
                                placeholder="blur"
                                blurDataURL={blurhash}
                                alt={name}
                            />
                        }
                    />
                </div>
                <p {...typoProps}>
                    {typeof name === "string" ? <a href={`https://anilist.co/anime/${anime.media.id}`} target="_blank">{name}</a> : name}
                </p>
            </button>
        </Tooltip>
    );
};

export default TopCard;