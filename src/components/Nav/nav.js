import React from 'react';
import { AppBar, Box, useMediaQuery } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import NavBarSelf from './NavBarSelf';
import NavDrawer from './NavDrawer';


const useCSSStyles = makeStyles(theme => ({
    

}));

export default function Nav() {
    const styleCSSClasses = useCSSStyles();
    
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <AppBar>
            <Box display="flex" justifyContent="flex-start" m={0} alignItems="center">
                {matches? <NavBarSelf display="desktop"/> : <NavDrawer/>}
            </Box>
        </AppBar>


    );
}