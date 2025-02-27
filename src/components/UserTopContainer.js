import {gql, useQuery} from "@apollo/client";
import DefaultLoader from "@/components/DefaultLoader";
import UserTopPage from "@/components/UserTopPage";

// Define the query to fetch the user's anime list
const ANIME_QUERY = gql`
query ($username: String) {
  MediaListCollection (userName: $username, type: ANIME, status_not_in: [PAUSED, PLANNING, DROPPED]) {
    lists {
      entries {
        media {
          id,
          isAdult,
          format,
          title {
            romaji,
            english
          },
          coverImage {
            large,
          }
        }
      }
    }
  }
}`;

const UserTopContainer = ({username, getAdultContent, getOnlyAdultContent, setStage, allFormats, setFinalResult, NUMBER_OF_CHOICES, setTransitionScene}) => {
    // Filter the formats that are checked
    const checkedFormats = allFormats.filter((format) => format.checked).map((format) => format.value);

    // Fetch the user's anime list
    const {loading, error, data} = useQuery(ANIME_QUERY, {
        variables: {username}
    });

    // Go back to the form
    const handleGoBack = (e) => {
        e.preventDefault();
        setStage(0);
    }

    return (
        <>
            {loading ? (
                <main className="flex justify-center items-center">
                    <DefaultLoader />
                </main>
            ) : (
                <>
                    {error ? (
                        <main className="flex flex-col gap-6 justify-center items-center">
                            <div className="p-3 rounded-md bg-red-600">
                                <p className="text-center mx-auto">
                                    {error.message}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleGoBack}
                                className="flex justify-center items-center bg-amber-600 bg-opacity-60 hover:bg-opacity-100 focus-visible:bg-opacity-100 transition transition-opacity py-3 px-6 rounded-md"
                            >
                                Go Back
                            </button>
                        </main>
                    ) : (
                        <main>
                            <UserTopPage
                                data={data}
                                getAdultContent={getAdultContent}
                                getOnlyAdultContent={getOnlyAdultContent}
                                setStage={setStage}
                                checkedFormats={checkedFormats}
                                setFinalResult={setFinalResult}
                                NUMBER_OF_CHOICES={NUMBER_OF_CHOICES}
                                setTransitionScene={setTransitionScene}
                            />
                        </main>
                    )}
                </>
            )}
        </>
    );
};

export default UserTopContainer;