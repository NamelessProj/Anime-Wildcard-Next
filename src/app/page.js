'use client';

import React from "react";
import UserForm from "@/components/UserForm";
import UserTopContainer from "@/components/UserTopContainer";
import {ApolloProvider} from "@apollo/client";
import createApolloClient from "../../apollo-client";

const client = createApolloClient();

export default function Home() {
    const [username, setUsername] = React.useState('');
    const [getAdultContent, setGetAdultContent] = React.useState(false);
    const [allFormats, setAllFormats] = React.useState([
        {
            value: "TV",
            label: "TV",
            checked: true
        },
        {
            value: "TV_SHORT",
            label: "TV Short",
            checked: true
        },
        {
            value: "MOVIE",
            label: "Movie",
            checked: true
        },
        {
            value: "SPECIAL",
            label: "Special",
            checked: true
        },
        {
            value: "OVA",
            label: "OVA",
            checked: true
        },
        {
            value: "ONA",
            label: "ONA",
            checked: true
        },
        {
            value: "MUSIC",
            label: "Music",
            checked: true
        }
    ]);

    const [error, setError] = React.useState('');
    const [stage, setStage] = React.useState(0);

    const handleCheckChange = (value) => {
        const updatedFormats = allFormats.map((format) => format.value === value ? {...format, checked: !format.checked} : format);
        setAllFormats(updatedFormats);
    }

    const handleNext = (e) => {
        e.preventDefault();
        setError('');
        if(!username || username === ""){
            setError("Please enter your Anilist username.");
            document.querySelector('input[name="username"]').focus();
            return;
        }
        setStage(stage + 1);
    }

    return (
        <ApolloProvider client={client}>
            {stage === 0 && (
                <UserForm
                    username={username}
                    setUsername={setUsername}
                    getAdultContent={getAdultContent}
                    setGetAdultContent={setGetAdultContent}
                    allFormats={allFormats}
                    handleNext={handleNext}
                    handleCheckChange={handleCheckChange}
                    error={error}
                />
            )}

            {stage === 1 && (
                <UserTopContainer
                    username={username}
                    getAdultContent={getAdultContent}
                    allFormats={allFormats}
                    setStage={setStage}
                />
            )}
        </ApolloProvider>
    );
}