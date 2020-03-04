import React, { Fragment } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import "./home.css";
import codingImage from './Coding.png';
import codingImage2 from './Coding2.png';
import Zoom from 'react-reveal/Zoom';


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
        <Zoom>
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
        </Zoom>
      </Fragment>
    )
  }
}

export default Home;
