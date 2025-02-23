import React from "react";
import shuffleList from "@/utils/shuffleList";
import DefaultLoader from "@/components/DefaultLoader";

const UserTopPage = ({data, getAdultContent, setStage}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [animeList, setAnimeList] = React.useState([]);
    const [topCardArray, setTopCardArray] = React.useState([]);
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

    const handleBack = (e) => {
        e.preventDefault();
        setStage(0);
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
                        <div className="p-3 rounded-md bg-red-600 my-2">
                            <p className="text-center mx-auto">
                                {error}
                            </p>
                        </div>
                    ) : (
                        <div>
                            {userError && (
                                <div className="p-3 rounded-md bg-red-600 my-2">
                                    <p className="text-center mx-auto">
                                        {userError}
                                    </p>
                                </div>
                            )}

                            <div>
                                Top card
                            </div>

                            <div>
                                Current Card
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default UserTopPage;