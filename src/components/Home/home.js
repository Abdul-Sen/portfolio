import React, { Fragment } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import "./home.css";
import codingImage from './Coding.png';
import codingImage2 from './Coding2.png';


// ****** NOTE: All other components were migrated to react functions. Home will soon be converted from class component to function component as well*********** 

class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log("updated");
    console.log(process.env.PUBLIC_URL);
  }

  render() {
    return (
      <Fragment>

        <Grid spacing={0} container wrap="wrap" justify="space-evenly" direction="row">
          <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
            <div id="landingOverlay">
              <div id="landing">
                <Grid spacing={0} container justify="flex-start" direction="column">
                  <Grid item md={3}>
                    <h1>Welcome!</h1>
                  </Grid>
                  <Grid item md={6}>
                    <h4>...Building cool stuff is my passion</h4>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>

        <Container maxWidth="lg">
          <Grid container spacing={2} direction="row" justify="center" alignItems="center">
            <Grid item md={8}>
              <Typography variant="h5" gutterBottom={false} style={{paddingTop:"20px"}}>
                This is who I am..
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Grid container direction="row" spacing={6} justify="center" alignItems="center">
                <Grid item md={4} sm={12} xs={12}>
                  <h3>Passion for development</h3>
                  <p>I love building cool apps. I enjoy the challenge of seeing a complex problem and breaking it down into individual components to overcome said problem. I enjoy the thrill of having a concept, and then turning that concept into a working product.</p>
                </Grid>
                <Grid item md={4} className="img-container">
                  <img src={codingImage} alt="banner_image_1 failed to load" height="250px"></img>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Grid container direction="row" spacing={6} justify="center" alignItems="center">
                <Grid item md={4} className="img-container">
                  <img src={codingImage2} alt="banner_image_2 failed to load" height="250px"></img>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                  <h3>Team Collaboration</h3>
                  <p>Working as a team towards a common goal is always more engaging. Having worked in an agile team has only re-enforced my love for working in a collaborative team environment</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    )
  }
}

export default Home;
