import {ApolloClient, InMemoryCache} from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "https://graphql.anilist.co/",
        cache: new InMemoryCache(),
        connectToDevTools: false,
    });
};

export default createApolloClient;