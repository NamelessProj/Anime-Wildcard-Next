import React from 'react';
import ReactFlipCard from "reactjs-flip-card";
import Image from "next/image";
import Tooltip from "rc-tooltip";

const TopCard = ({index, anime, handler}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const [name, setName] = React.useState(index + 1);

    React.useEffect(() => {
        if(anime){
            setName(anime.media.title.english || anime.media.title.romaji);
            setIsFlipped(true);
        }
    }, [anime]);

    const backCard = `/card_back_${index + 1}.jpg`;

    const imgProps = {
        className: "w-full h-full rounded-[5px] overflow-clip object-cover",
        fill: true,
    }

    const typoProps = {
        className: "text-nowrap whitespace-nowrap overflow-clip",
        style: {textOverflow: "ellipsis"},
    }

    return (
        <Tooltip placement="bottom" trigger={['hover']} overlay={<span>{name}</span>}>
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
                        containerCss="w-24 h-36"
                        frontComponent={<Image {...imgProps} src={backCard} alt="" />}
                        backComponent={<Image {...imgProps} src={anime ? anime.media.coverImage.large : backCard} alt={name} />}
                    />
                </div>
                {typeof name === "string" ? (
                    <p {...typoProps}>
                        <a href={`https://anilist.co/anime/${anime.media.id}`} target="_blank">
                            {name}
                        </a>
                    </p>
                ) : (
                    <p {...typoProps}>
                        {name}
                    </p>
                )}
            </button>
        </Tooltip>
    );
};

export default TopCard;