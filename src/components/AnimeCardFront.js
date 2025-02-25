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
                width={260}
                height={400}
            />
        </div>
    );
};

export default AnimeCardFront;