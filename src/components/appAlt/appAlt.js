import React, {Fragment } from 'react';
import { Container } from '@material-ui/core';
import Projects from '../Projects/projects';
import Home from '../Home/home';
import Footer from '../Footer/footer';
import ContactContainer from '../Contact/contactContainer';

function AppAlt(props){
    return(
        <Container disableGutters={true}>
            <Home />
            <Projects />
            <ContactContainer />
            <Footer />
        </Container>
    )
}

export default AppAlt;