import Image from "next/image";

const AnimeCardFront = ({cardClassName, imgClassName, blurhash}) => {
    return (
        <div className={cardClassName}>
            <Image
                className={imgClassName}
                src="/card_back.jpg"
                alt=""
                placeholder="blur"
                blurDataURL={blurhash}
                fill
            />
        </div>
    );
};

export default AnimeCardFront;