import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        //dynamic id set here
        <div>
            <h1>Details About: {friend.name}</h1>
            <p>Call him/her : {friend.phone}</p>
            <h2> Everything you need to know about this person</h2>
        </div>
    );
};

export default FriendDetails;