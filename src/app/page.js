'use client';

import React from "react";
import UserForm from "@/components/UserForm";

export default function Home() {
    const [username, setUsername] = React.useState('');
    const [getAdultContent, setGetAdultContent] = React.useState(false);
    const [error, setError] = React.useState('');
    const [stage, setStage] = React.useState(0);

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
        <>
            {stage === 0 && (
                <UserForm
                    username={username}
                    setUsername={setUsername}
                    getAdultContent={getAdultContent}
                    setGetAdultContent={setGetAdultContent}
                    handleNext={handleNext}
                    error={error}
                />
            )}
        </>
    );
}