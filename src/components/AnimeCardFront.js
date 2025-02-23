import Image from "next/image";

const AnimeCardFront = ({cardClassName, imgClassName}) => {
    return (
        <div className={cardClassName}>
            <Image
                width={260}
                height={400}
                className={imgClassName}
                src="/card_back.jpg"
                alt=""
            />
        </div>
    );
};

export default AnimeCardFront;