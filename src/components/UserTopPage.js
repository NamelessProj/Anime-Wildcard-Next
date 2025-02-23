import React from "react";
import shuffleList from "@/utils/shuffleList";
import DefaultLoader from "@/components/DefaultLoader";
import TopCard from "@/components/TopCard";
import AnimeCard from "@/components/AnimeCard";

const UserTopPage = ({data, getAdultContent, setStage}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [animeList, setAnimeList] = React.useState([]);
    const [topCardArray, setTopCardArray] = React.useState(Array(5).fill(null));
    const [error, setError] = React.useState('');
    const [userError, setUserError] = React.useState('');
    const [canClick, setCanClick] = React.useState(false);

    const [animeCards, setAnimeCards] = React.useState([]);

    React.useEffect(() => {
        if(data && data.MediaListCollection && data.MediaListCollection.lists){
            const list = data.MediaListCollection.lists.flatMap(list => list.entries);
            const shuffledList = shuffleList(getAdultContent ? list : list.filter(entry => !entry.media.isAdult));

            if(shuffledList.length < 5){
                setError("You need at least 5 anime in your list.");
                setIsLoading(false);
                return;
            }

            setAnimeList(shuffledList.slice(0, 5));
            setIsLoading(false);

            setTimeout(() => {
                setCanClick(true);
            }, 3000);
        }
    }, [data]);

    React.useEffect(() => {
        const aniLength = animeList.length;
        if(aniLength > 0 && currentIndex < aniLength){
            setAnimeCards([...animeCards, <AnimeCard key={animeList[currentIndex].media.id} anime={animeList[currentIndex].media} />]);
        }
    }, [currentIndex, animeList]);

    const handleBack = (e) => {
        e.preventDefault();
        setStage(0);
    }

    const handleTopCardArray = (index) => {
        setUserError('');

        if(!canClick) return;

        if(topCardArray[index] !== null){
            setUserError("This place is already taken.");
            return;
        }

        setCanClick(false);
        setTopCardArray(topCardArray.map((anime, i) => i === index ? animeList[currentIndex] : anime));

        setCurrentIndex(currentIndex + 1);

        setTimeout(() => {
            setCanClick(true);
        }, 3000);
    }

    return (
        <>
            {isLoading ? (
                <div className="h-full flex justify-center items-center">
                    <DefaultLoader />
                </div>
            ) : (
                <div>
                    <div className="flex justify-center my-2">
                        <button
                            type="button"
                            onClick={handleBack}
                            className="flex justify-center items-center bg-amber-800 bg-opacity-60 hover:bg-opacity-100 focus-visible:bg-opacity-100 transition transition-opacity py-3 px-6 rounded-md"
                        >
                            Back
                        </button>
                    </div>

                    {error ? (
                        <div className="p-3 rounded-md w-fit mx-auto my-6 bg-red-600 my-2">
                            <p className="text-center mx-auto">
                                {error}
                            </p>
                        </div>
                    ) : (
                        <div>
                            {userError && (
                                <div className="w-fit mx-auto p-3 rounded-md bg-red-600 my-2">
                                    <p className="text-center mx-auto">
                                        {userError}
                                    </p>
                                </div>
                            )}

                            <div className="flex justify-center flex-row-reverse flex-wrap-reverse gap-5 my-12">
                                {topCardArray.map((_, i) => (
                                    <TopCard
                                        key={i}
                                        index={i}
                                        anime={topCardArray[i]}
                                        handler={() => handleTopCardArray(i)}
                                    />
                                ))}
                            </div>

                            <div>
                                {animeCards}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default UserTopPage;