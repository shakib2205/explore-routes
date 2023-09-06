import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={(isActive)=>isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/friend'>Friend</NavLink>
                <NavLink to ='/post'>Post</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
            <h4>Common Nested Routing</h4>
        </div>
    );
};
 
export default Header; 