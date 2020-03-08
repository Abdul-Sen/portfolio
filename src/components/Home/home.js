import React, { Fragment } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import "./home.css";

// ****** NOTE: All other components were migrated to react functions. Home will soon be converted from class component to function component as well*********** 

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
      <Container id="home" maxWidth={false} disableGutters={true}>
        <Grid spacing={0} container wrap="wrap" justify="space-evenly" direction="row">
          <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
            <div id="landingOverlay">
              <div id="landing">
                <Grid spacing={0} container justify="flex-start" direction="column">
                  <Grid item md={6} id="titleContainer">
                    <Typography variant="h3" id="title" >hello, I'm Abdul.</Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="h4" id="sub">Fullstack web developer</Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
        </Container>
      </Fragment>
    )
  }
}

export default Home;
