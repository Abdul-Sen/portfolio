import React from 'react';
import { Route, Switch } from 'react-router-dom'

import About from '../About/about';
import ContactContainer from '../Contact/contactContainer';
import Home from '../Home/home';
import Projects from '../Projects/projects'
import Footer from '../Footer/footer';
import Nav from '../Nav/nav';
import { Box } from '@material-ui/core';
class App extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        <Box height="40px"/>
        <Switch>
          <Route exact path='/' render={() => (
            <Home />
          )} />
         {/* <Route exact path='/home' render={() => (
            <Home />
          )} /> */}

          <Route exact path='/Projects' render={() => (
            <Projects />
          )} />
          <Route exact path='/Contact' render={() => (
            <ContactContainer />
          )} />

          <Route exact path='/About' render={() => (
            <About />
          )} />
          <Route render={() => (
            <h1>Not Found</h1>
          )} />
        </Switch>
        <Footer />
        </div>
    );
  }

}

export default App;
