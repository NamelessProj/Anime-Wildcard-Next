import Image from "next/image";

const AnimeCardFront = ({cardClassName, imgClassName}) => {
    return (
        <div className={cardClassName}>
            <Image
                className={imgClassName}
                src="/card_back.jpg"
                alt=""
                fill
            />
        </div>
    );
};

export default AnimeCardFront;