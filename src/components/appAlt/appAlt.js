import React, { Fragment } from 'react';
import { Container } from '@material-ui/core';
import Projects from '../Projects/projects';
import Home from '../Home/home';
import Footer from '../Footer/footer';
import Nav from '../Nav/nav';
import ContactContainer from '../Contact/contactContainer';
import SkillsContainer from '../Skills/skillsContainer';

function AppAlt(props) {
    return (
        <Container maxWidth={false} disableGutters={true}>
            <Nav />
            <Home />
            <SkillsContainer />
            <Projects />
            <ContactContainer />
            <Footer />
        </Container>
    )
}

export default AppAlt;