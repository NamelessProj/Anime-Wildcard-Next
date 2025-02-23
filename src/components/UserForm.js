import TextInput from "@/components/TextInput";
import Checkbox from "@/components/Checkbox";

const UserForm = ({username, setUsername, getAdultContent, setGetAdultContent, handleNext}) => {
    return (
        <main className="flex justify-center items-center">
            <div className="card w-[min(100%,420px)] bg-gray-800 rounded-xl px-10 pt-12 pb-8">
                <form>
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
                    <button
                        type="button"
                        onClick={handleNext}
                        className="w-full flex justify-center items-center bg-amber-800 bg-opacity-60 hover:bg-opacity-100 focus-visible:bg-opacity-100 transition transition-opacity py-3 rounded-md"
                    >
                        Next
                    </button>
                </form>
            </div>
        </main>
    );
};

export default UserForm;