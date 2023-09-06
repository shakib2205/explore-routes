import React from 'react';
import './Posts.css'
import { Link, useNavigate } from 'react-router-dom';

const Posts = ({ posts }) => {
    const { id, title, body } = posts;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='posts'>
            <h2>{title}</h2>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>visit: {id}</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link> 
            <button onClick={handleNavigate} >Show Details 2</button>
        </div> 
    );
};

export default Posts;