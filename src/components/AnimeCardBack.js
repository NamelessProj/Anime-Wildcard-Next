import Image from "next/image";
import {FaExternalLinkAlt} from "react-icons/fa";
import {TbRating18Plus} from "react-icons/tb";
import Tooltip from "rc-tooltip";

const AnimeCardBack = ({anime, name, cardClassName, imgClassName, handleClick}) => {
    return (
        <Tooltip placement="bottom" trigger={["hover"]} overlay={<span>{name}</span>}>
            <div className={`${cardClassName} relative isolate`}>
                <Image
                    className={`${imgClassName} absolute inset-0 z-0`}
                    src={anime.coverImage.large}
                    alt={name}
                    fill
                />
                <button
                    type="button"
                    onClick={handleClick}
                    className="absolute right-0 top-0 p-5 rounded-md backdrop-blur-[2px] text-amber-600"
                >
                    <FaExternalLinkAlt size={17} />
                </button>
                {anime.isAdult && (
                    <div className="absolute left-0 top-0">
                        <TbRating18Plus size={36} color="red" />
                    </div>
                )}
                <div className="absolute left-0 right-0 bottom-0 p-2 bg-gray-800 bg-opacity-70 backdrop-blur-sm z-10">
                    <p className="text-nowrap whitespace-nowrap overflow-clip text-xl" style={{textOverflow: "ellipsis"}}>
                        {name}
                    </p>
                </div>
            </div>
        </Tooltip>
    );
};

export default AnimeCardBack;