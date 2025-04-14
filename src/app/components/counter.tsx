"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
    console.log(" COUNTER COMPONENT ")
    const [count, setCount] = useState(0);
    // const { isLoaded, userId, sesseionId, getToken } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();

    if(!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <button
            onClick={() => setCount(count + 1)}
        >
            Clicked {count} times.
        </button>
    )
}