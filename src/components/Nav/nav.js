import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Button, Box, IconButton, SvgIcon, useMediaQuery } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import * as ROUTES from '../../routes/routes';
import NavBarSelf from './NavBarSelf';
import NavDrawer from './NavDrawer';


// import NavBarSelf from './NavBarSelf';

const useCSSStyles = makeStyles(theme => ({
    

}));

export default function Nav() {
    const styleCSSClasses = useCSSStyles();
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <AppBar>
            <Box display="flex" justifyContent="flex-start" m={0} alignItems="center">
                {matches? <NavBarSelf/> : <NavDrawer/>}
                {/* <span>{`(min-width:600px) matches: ${matches}`}</span> */}
            </Box>
        </AppBar>


    );
}

/**
 *
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

 */