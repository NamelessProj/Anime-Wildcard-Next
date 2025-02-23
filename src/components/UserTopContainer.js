import {gql, useQuery} from "@apollo/client";
import DefaultLoader from "@/components/DefaultLoader";
import UserTopPage from "@/components/UserTopPage";

const ANIME_QUERY = gql`
query ($username: String) {
  MediaListCollection (userName: $username, type: ANIME, status_not_in: [PAUSED, PLANNING, DROPPED]) {
    lists {
      entries {
        media {
          id,
          isAdult,
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

const UserTopContainer = ({username, getAdultContent, setStage}) => {
    const {loading, error, data} = useQuery(ANIME_QUERY, {
        variables: {username}
    });

    return (
        <>
            {loading ? (
                <main className="flex justify-center items-center">
                    <DefaultLoader />
                </main>
            ) : (
                <>
                    {error ? (
                        <main className="flex justify-center items-center">
                            <div className="p-3 rounded-md bg-red-600">
                                <p className="text-center mx-auto">
                                    {error.message}
                                </p>
                            </div>
                        </main>
                    ) : (
                        <main>
                            <UserTopPage data={data} getAdultContent={getAdultContent} setStage={setStage} />
                        </main>
                    )}
                </>
            )}
        </>
    );
};

export default UserTopContainer;