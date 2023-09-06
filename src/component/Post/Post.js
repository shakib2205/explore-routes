import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Post = () => {
    const post = useLoaderData();
    console.log(post);
    return (
        <div>
            <h3>A lot of Fb post here</h3>
            {
                post.map(posts => <Posts
                 key={posts.id}
                 posts={posts} 
                ></Posts>)
            }
        </div>
    );
};

export default Post;