import AnimeCard from "@/components/AnimeCard";
import {base64Image} from "@/utils/Base64Image";

const FinalResult = ({finalResult, setStage}) => {
    const numberOfRows = Math.ceil(1/2 * (-1 + Math.sqrt(1 + 8 * finalResult.length))); // Calculate the number of rows for the pyramid
    let currentIndex = -1;

    const totalAnimationDuration = 3000; // Total animation duration in milliseconds
    const initialDelay = 1500; // Delay before the animation starts in milliseconds

    return (
        <main>
            <div className="grid grid-cols-1 gap-6">
                {Array.from({length: numberOfRows}).map((_, i) => (
                    <div key={i} className="flex md:flex-row flex-wrap justify-center gap-6">
                        {Array.from({length: i + 1}).map((_, j) => {
                            currentIndex++;
                            const delay = initialDelay + totalAnimationDuration * (finalResult.length - currentIndex -1) / finalResult.length; // Calculate the delay for the animation, the last card has the smallest delay and the first card has the largest delay
                            return (
                                <div key={j} className="flex justify-center items-center">
                                    {finalResult[currentIndex] && (
                                        <AnimeCard
                                            anime={finalResult[currentIndex].media}
                                            frontImage={`/card_back_${currentIndex + 1}.jpg`}
                                            blurhash={base64Image}
                                            doRotate={false}
                                            className=""
                                            timeBeforeFlip={delay}
                                            displayInt={currentIndex + 1}
                                        />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className="my-10 flex justify-center items-center">
                <button
                    type="button"
                    onClick={() => setStage(0)}
                    className="mt-6 py-3 px-5 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition"
                >
                    Go Back
                </button>
            </div>
        </main>
    );
};

export default FinalResult;