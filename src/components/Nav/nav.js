import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes/routes';

const Nav = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li>
                <Link to={ROUTES.CONTACT}>Contact</Link>
            </li>
            <li>
                <Link to={ROUTES.PROJECTS}>Projects</Link>
            </li>
        </ul>
    </div>
);
export default Nav;