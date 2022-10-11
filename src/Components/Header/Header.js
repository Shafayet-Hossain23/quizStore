import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='website-name'>

            </div>
            <div className="nav-bar">
                <NavLink to="/topics">Topics</NavLink>
                <NavLink to="/statistics">statistics</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
            </div>
        </div>
    );
};

export default Header;