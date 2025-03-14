import React from "react";
import AnimeCard from "@/components/AnimeCard";
import {base64Image} from "@/utils/Base64Image";
import Confetti from "react-confetti-boom";

const FinalResult = ({finalResult, setStage, setTransitionScene, transitionSceneDuration, calculateDelay}) => {
    const [runConfetti, setRunConfetti] = React.useState(false); // State to run the confetti animation

    const numberOfRows = Math.ceil(1/2 * (-1 + Math.sqrt(1 + 8 * finalResult.length))); // Calculate the number of rows for the pyramid
    let currentIndex = -1;

    // Scroll to the last row
    React.useEffect(() => {
        const el = document.querySelector('.card-row-container');
        if(el && typeof el.scrollIntoView === "function") el.scrollIntoView({behavior: 'smooth', block: 'end'});
    }, []);

    React.useEffect(() => {
        setTimeout(() => setTransitionScene(false), transitionSceneDuration / 2 + 100); // Remove the transition scene after half of the duration of the transition scene
    }, [setTransitionScene, transitionSceneDuration]);

    React.useEffect(() => {
        const delayForFirstCard = calculateDelay(0); // Calculate the delay for the first card
        setTimeout(() => setRunConfetti(true), delayForFirstCard); // Run the confetti animation after the first card is flipped
    }, [calculateDelay]);

    return (
        <main className="flex flex-col items-center justify-center py-10">
            {runConfetti && <Confetti
                mode="boom"
                particleCount={500}
                launchSpeed={3}
            />}
            <div className="card-row-container scroll-mb-4 grid grid-cols-1 gap-6">
                {Array.from({length: numberOfRows}).map((_, i) => (
                    <div key={i} className="row flex md:flex-row flex-wrap justify-center gap-6">
                        {Array.from({length: i + 1}).map((_, j) => {
                            currentIndex++;
                            return (
                                <div key={j} className="card flex justify-center items-center">
                                    {finalResult[currentIndex] && (
                                        <AnimeCard
                                            anime={finalResult[currentIndex].media}
                                            frontImage={`/card_back_${currentIndex + 1}.jpg`}
                                            blurhash={base64Image}
                                            doRotate={false}
                                            className=""
                                            timeBeforeFlip={calculateDelay(currentIndex)}
                                            displayInt={currentIndex + 1}
                                        />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className="mt-10 flex justify-center items-center">
                <button
                    type="button"
                    onClick={() => setStage(1)}
                    className="mt-6 py-3 px-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus-visible:bg-blue-700 transition-colors"
                >
                    One More Time
                </button>
            </div>
            <div className="mb-10 flex justify-center items-center">
                <button
                    type="button"
                    onClick={() => setStage(0)}
                    className="mt-6 py-3 px-5 rounded-md bg-amber-600 text-white hover:bg-amber-700 focus-visible:bg-amber-700 transition-colors"
                >
                    Go To The Form
                </button>
            </div>
        </main>
    );
};

export default FinalResult;