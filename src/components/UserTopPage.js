import React from "react";
import shuffleList from "@/utils/shuffleList";
import DefaultLoader from "@/components/DefaultLoader";
import TopCard from "@/components/TopCard";
import AnimeCard from "@/components/AnimeCard";
import {base64Image} from "@/utils/Base64Image";

const UserTopPage = ({data, getAdultContent, setStage, checkedFormats, setFinalResult, NUMBER_OF_CHOICES, setTransitionScene}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [animeList, setAnimeList] = React.useState([]);
    const [topCardArray, setTopCardArray] = React.useState(Array(NUMBER_OF_CHOICES).fill(null));
    const [error, setError] = React.useState('');
    const [userError, setUserError] = React.useState('');
    const [canClick, setCanClick] = React.useState(false);

    const [animeCards, setAnimeCards] = React.useState([]);

    // Set the anime list
    React.useEffect(() => {
        if(data && data.MediaListCollection && data.MediaListCollection.lists){
            const list = data.MediaListCollection.lists.flatMap(list => list.entries); // Flatten the lists
            const shuffledList = shuffleList(getAdultContent ? list : list.filter(entry => !entry.media.isAdult)); // Shuffle the list

            // Filter the list by the checked formats
            const filteredList = shuffledList.filter(entry => checkedFormats.includes(entry.media.format));

            // Check if the list has at least 5 anime
            if(filteredList.length < NUMBER_OF_CHOICES){
                setError(`You need at least ${NUMBER_OF_CHOICES} anime in your list.`);
                setIsLoading(false);
                return;
            }

            // Set the anime list
            setAnimeList(filteredList.slice(0, NUMBER_OF_CHOICES));
            setIsLoading(false);

            // Enable the click after 3 seconds
            setTimeout(() => {
                setCanClick(true);
            }, 3000);
        }
    }, [data, NUMBER_OF_CHOICES]);

    // Add an anime card
    const addAnimeCard = (anime) => setAnimeCards([...animeCards, <AnimeCard key={anime.id} anime={anime} frontImage="/card_back.jpg" blurhash={base64Image} />]);

    // Set the anime cards
    React.useEffect(() => {
        const aniLength = animeList.length;

        // Check if the anime list is not empty and the current index is less than the length to set the anime cards
        if(aniLength > 0 && currentIndex < aniLength){
            addAnimeCard(animeList[currentIndex].media);
        }else if(aniLength === NUMBER_OF_CHOICES){
            // Else if the anime list is full, set the final result, disable the click and go to the next stage after 3 seconds
            setCanClick(false);
            setFinalResult(topCardArray);
            setTimeout(() => setTransitionScene(true), 2500);
            setTimeout(() => setStage(2), 3700);
        }

    }, [currentIndex, animeList, NUMBER_OF_CHOICES, topCardArray]);

    // Go back to the form
    const handleBack = (e) => {
        e.preventDefault();
        setStage(0);
    }

    // Handle the top card array
    const handleTopCardArray = (index) => {
        setUserError('');

        if(!canClick) return; // Check if the user can click

        // Check if the current index is empty
        if(topCardArray[index] !== null){
            setUserError("This place is already taken.");
            return;
        }

        // Disable the click
        setCanClick(false);

        // Set the top card array
        setTopCardArray(topCardArray.map((anime, i) => i === index ? animeList[currentIndex] : anime));

        setCurrentIndex(currentIndex + 1);

        // Enable the click after 3 seconds
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
                            className="flex justify-center items-center bg-amber-600 hover:bg-amber-700 focus-visible:bg-amber-700 transition py-3 px-6 rounded-md"
                        >
                            Back
                        </button>
                    </div>

                    {error ? (
                        <div className="p-3 rounded-md w-fit mx-auto my-6 bg-red-600">
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
                                        blurhash={base64Image}
                                    />
                                ))}
                            </div>

                            <div className="min-h-[400px]">
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