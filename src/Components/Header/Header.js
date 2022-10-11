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
                    <NavLink to="/topics">Topics</NavLink>
                    <NavLink to="/statistics">statistics</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Header;