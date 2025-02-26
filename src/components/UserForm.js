import TextInput from "@/components/TextInput";
import Checkbox from "@/components/Checkbox";
import FormatCheckbox from "@/components/FormatCheckbox";

const UserForm = ({username, setUsername, getAdultContent, setGetAdultContent, allFormats, handleNext, handleCheckChange, error}) => {
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
                    <TextInput
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label="Your Anilist username"
                    />
                    <Checkbox
                        isChecked={getAdultContent}
                        setCheck={setGetAdultContent}
                        name="getAdultContent"
                        id="getAdultContent"
                        label="Include adult content"
                    />
                    <div className="my-3 w-full">
                        <h3 className="text-xl font-medium text-gray-400 mb-3">
                            Select formats
                        </h3>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(105px,1fr))] gap-2">
                            {allFormats.map((format) => (
                                <FormatCheckbox
                                    key={format.value}
                                    format={format}
                                    onChange={handleCheckChange}
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="w-full flex justify-center items-center bg-amber-600 hover:bg-amber-700 focus-visible:bg-amber-700 transition py-3 rounded-md"
                    >
                        Next
                    </button>
                </form>
            </div>
        </main>
    );
};

export default UserForm;