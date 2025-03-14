import TextInput from "@/components/TextInput";
import Checkbox from "@/components/Checkbox";

const UserForm = ({username, setUsername, getAdultContent, setGetAdultContent, getOnlyAdultContent, setGetOnlyAdultContent, indexSelected, setIndexSelected, allFormats, allMangaFormats, handleNext, handleCheckChange, error}) => {
    const handleAdultCheckbox = (e) => {
        switch(e.target.name){
            case "getAdultContent":
                if(getOnlyAdultContent) setGetOnlyAdultContent(false);
                setGetAdultContent(!getAdultContent);
                break;

            case "getOnlyAdultContent":
                if(!getOnlyAdultContent) setGetAdultContent(true);
                setGetOnlyAdultContent(!getOnlyAdultContent);
                break;

            default:
                break;
        }
    }

    const tabBase = "tab flex justify-center items-center py-2 px-4 rounded-md transition-colors"
    const tabClassName = `${tabBase} bg-gray-700`;
    const selectedTabClassName = `${tabBase} tab-selected bg-amber-600`;

    return (
        <main className="flex justify-center items-center">
            <div className="card w-[min(100%,420px)] bg-gray-800 rounded-xl px-10 pt-12 pb-8">
                {error && (
                    <div className="mb-8 p-3 rounded-md bg-red-600">
                        <p className="text-center mx-auto">
                            {error}
                        </p>
                    </div>
                )}
                <form onSubmit={handleNext}>
                    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-3 mb-9">
                        <button
                            type="button"
                            onClick={() => setIndexSelected('ANIME')}
                            className={indexSelected === 'ANIME' ? selectedTabClassName : tabClassName}
                        >
                            Anime
                        </button>
                        <button
                            type="button"
                            onClick={() => setIndexSelected('MANGA')}
                            className={indexSelected === 'MANGA' ? selectedTabClassName : tabClassName}
                        >
                            Manga
                        </button>
                    </div>
                    <TextInput
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label="Your Anilist username"
                    />
                    <div className="mt-3 w-full">
                        <h3 className="text-xl font-medium text-gray-400 mb-3">
                            Adult content
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                            <Checkbox
                                isChecked={getAdultContent}
                                handler={handleAdultCheckbox}
                                name="getAdultContent"
                                id="getAdultContent"
                                label="Include adult content"
                            />
                            <Checkbox
                                isChecked={getOnlyAdultContent}
                                handler={handleAdultCheckbox}
                                name="getOnlyAdultContent"
                                id="getOnlyAdultContent"
                                label="Include ONLY adult content"
                            />
                        </div>
                    </div>
                    <div className="mt-3 w-full">
                        <h3 className="text-xl font-medium text-gray-400 mb-3">
                            Select formats
                        </h3>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(105px,1fr))] gap-2">
                            {indexSelected === 'ANIME' && allFormats.map((format) => (
                                <Checkbox
                                    key={format.value}
                                    isChecked={format.checked}
                                    handler={() => handleCheckChange(format.value)}
                                    name={format.value}
                                    id={format.value}
                                    label={format.label}
                                />
                            ))}
                            {indexSelected === 'MANGA' && allMangaFormats.map((format) => (
                                <Checkbox
                                    key={format.value}
                                    isChecked={format.checked}
                                    handler={() => handleCheckChange(format.value, 'MANGA')}
                                    name={format.value}
                                    id={format.value}
                                    label={format.label}
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="w-full mt-6 flex justify-center items-center bg-amber-600 hover:bg-amber-700 focus-visible:bg-amber-700 transition-colors py-3 rounded-md"
                    >
                        Next
                    </button>
                </form>
            </div>
        </main>
    );
};

export default UserForm;
