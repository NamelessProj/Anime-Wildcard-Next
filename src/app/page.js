'use client';

import React from "react";
import UserForm from "@/components/UserForm";
import UserTopContainer from "@/components/UserTopContainer";
import {ApolloProvider} from "@apollo/client";
import createApolloClient from "../../apollo-client";
import FinalResult from "@/components/FinalResult";
import TransitionScene from "@/components/TransitionScene";

const client = createApolloClient();

export default function Home() {
    const [username, setUsername] = React.useState('');
    const [indexSelected, setIndexSelected] = React.useState('ANIME');
    const [getAdultContent, setGetAdultContent] = React.useState(false);
    const [getOnlyAdultContent, setGetOnlyAdultContent] = React.useState(false);
    const [finalResult, setFinalResult] = React.useState([]);
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
            checked: false
        },
        {
            value: "OVA",
            label: "OVA",
            checked: false
        },
        {
            value: "ONA",
            label: "ONA",
            checked: false
        },
        {
            value: "MUSIC",
            label: "Music",
            checked: false
        }
    ]);

    const NUMBER_OF_CHOICES = 6; // Number of anime choices

    const TRANSITION_SCENE_DURATION = 4500; // Duration of the transition scene in milliseconds

    const [error, setError] = React.useState('');
    const [stage, setStage] = React.useState(0);

    const [transitionScene, setTransitionScene] = React.useState(false);

    const handleCheckChange = (value) => {
        const updatedFormats = allFormats.map((format) => format.value === value ? {...format, checked: !format.checked} : format); // Toggle checked value
        setAllFormats(updatedFormats);
    }

    const totalAnimationDuration = 4000; // Total animation duration in milliseconds
    const initialDelay = TRANSITION_SCENE_DURATION + 1500; // Delay before the card animation starts in milliseconds
    const calculateDelay = (index) => initialDelay + totalAnimationDuration * (finalResult.length - index -1) / finalResult.length; // Calculate the delay for the animation, the last card has the smallest delay and the first card has the largest delay

    const handleNext = (e) => {
        e.preventDefault();
        setError('');

        // Check that username is not empty
        if(!username || username === ""){
            setError("Please enter your Anilist username.");
            document.querySelector('input[name="username"]').focus();
            return;
        }

        // Check that at least one format is checked
        if(allFormats.filter((format) => format.checked).length === 0){
            setError("Please select at least one format.");
            return;
        }

        // Proceed to next stage
        setStage(stage + 1);
    }

    return (
        <ApolloProvider client={client}>
            {transitionScene && <TransitionScene transitionSceneDuration={TRANSITION_SCENE_DURATION} />}

            {stage === 0 && (
                <UserForm
                    username={username}
                    setUsername={setUsername}
                    getAdultContent={getAdultContent}
                    setGetAdultContent={setGetAdultContent}
                    getOnlyAdultContent={getOnlyAdultContent}
                    setGetOnlyAdultContent={setGetOnlyAdultContent}
                    indexSelected={indexSelected}
                    setIndexSelected={setIndexSelected}
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
                    getOnlyAdultContent={getOnlyAdultContent}
                    allFormats={allFormats}
                    setStage={setStage}
                    setFinalResult={setFinalResult}
                    NUMBER_OF_CHOICES={NUMBER_OF_CHOICES}
                    setTransitionScene={setTransitionScene}
                    transitionSceneDuration={TRANSITION_SCENE_DURATION}
                />
            )}

            {stage === 2 && (
                <FinalResult
                    finalResult={finalResult}
                    setStage={setStage}
                    setTransitionScene={setTransitionScene}
                    transitionSceneDuration={TRANSITION_SCENE_DURATION}
                    calculateDelay={calculateDelay}
                />
            )}
        </ApolloProvider>
    );
}