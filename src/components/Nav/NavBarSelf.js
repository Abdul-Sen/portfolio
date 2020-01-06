import * as ROUTES from '../../routes/routes';
import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import { AppBar, Typography, Button, Box, IconButton, SvgIcon, useMediaQuery } from '@material-ui/core';

function HomeButton() {
    return (<IconButton aria-label="delete">
        <SvgIcon>
            <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z" />
        </SvgIcon>
    </IconButton>);
}
export default function NavBarSelf(props) {
    return (
        <Fragment>
            <Link to={ process.env.PUBLIC_URL + ROUTES.HOME}>

                {props.display === "desktop" ? <HomeButton></HomeButton> : 
                <Link to={process.env.PUBLIC_URL + ROUTES.HOME}>
                    <Button>
                        Home
                    </Button>
                </Link>}

            </Link>
            <Box width="2em" />
            <Link to={process.env.PUBLIC_URL + ROUTES.PROJECTS}>
                <Button>
                    Work/Projects
                    </Button>
            </Link>
            <Box width="2em" />
            <Link to={process.env.PUBLIC_URL + ROUTES.CONTACT}>
                <Button>
                    Contact
                </Button>
            </Link>
        </Fragment>
    );
}
