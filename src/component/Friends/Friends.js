import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    //loaded data here
    // console.log(friends);
    return (
        <div>
            <h2>Myself Allen Shopon: {friends.length}</h2>
            {
                friends.map(friend => <Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
        </div>
    );
}; 

export default Friends; 