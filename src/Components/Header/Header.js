import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import image from '../../images/image.png'

const Header = () => {
    return (
        <div className='Header'>
            <div className="navbar-section">
                <div className='website-name'>
                    <h2>quizStore</h2>
                </div>
                <div className="nav-bar">
                    <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/topics">Topics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/statistics">statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/blogs">Blogs</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Header;