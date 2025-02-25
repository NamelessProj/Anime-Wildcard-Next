import Image from "next/image";

const AnimeCardFront = ({cardClassName, imgClassName, frontImage, blurhash}) => {
    return (
        <div className={cardClassName}>
            <Image
                className={imgClassName}
                src={frontImage}
                alt=""
                placeholder="blur"
                blurDataURL={blurhash}
                fill
            />
        </div>
    );
};

export default AnimeCardFront;