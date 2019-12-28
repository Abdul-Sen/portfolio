import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, Container } from '@material-ui/core';
import "./home.css";
import codingImage from './Coding.png';
import codingImage2 from './Coding2.png';
import { flexbox } from '@material-ui/system';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>

        <Grid spacing={0} container wrap="wrap" justify="space-evenly" direction="row">
          <Grid item sm={12} md={12} lg={12} xl={12}>
            <div id="landingOverlay">
              <div id="landing">
                <Grid spacing={0} container justify="flex-start" direction="column">
                  <Grid item md={3}>
                    <h1>Welcome!</h1>
                  </Grid>
                  <Grid item md={6}>
                    <h4 >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, minus?</h4>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>

        <Container maxWidth="lg">
          <Grid container spacing={2} direction="row" justify="space-around" >
            <Grid item md={4} sm={12} xs={12} ><p>Lorem ipsum dolor, sit eaque aliquid, eius rerum blanditiis non dicta nesciunt. Ipsam labore nobis dolorem delectus dolore saepe, amet assumenda ducimus aliquam fugiat sit placeat voluptatibus aperiam veniam quasi nemo voluptas quae cum. Veniam, placeat possimus debitis fugit doloribus, in natus minus ullam, nobis illo quidem numquam facere facilis obcaecati rem aut asperiores quisquam quae voluptates reiciendis ratione error libero? Similique id sit ad optio voluptatum nostrum provident adipisci exercitationem repellat, assumenda quisquam saepe officia error nisi?</p></Grid>
            <Grid className="img-container"item md={4} sm={12} xs={12} >
              <img src={codingImage} width="300px" height="300px" alt="illustration#2" wrap="wrap"></img>
            </Grid>
            <Grid  className="img-container" item md={5} sm={12} xs={12}>
              <img src={codingImage2} width="300px" height="300px" ></img>
            </Grid>
            <Grid item md={5} sm={12} xs={12}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto consequuntur laborum tenetur, eligendi amet voluptatem enim sapiente adipisci quidem ut similique ad autem consectetur a nulla iusto esse laboriosam nemo molestiae cum vero sequi illo quae! Quasi fuga in nesciunt tenetur vel voluptatibus sed ad nobis laudantium inventore voluptatum eaque, impedit laboriosam asperiores quidem ducimus corrupti quae hic voluptates tempora quis harum unde. Inventore ad incidunt illum at voluptatibus laudantium odit quo sunt veniam libero, quia impedit eum mollitia praesentium modi unde, provident doloremque blanditiis numquam doloribus culpa reiciendis neque vel? Error ullam asperiores hic consequatur consectetur sequi commodi.</p></Grid>
           

          </Grid>
        </Container>

        {/* <Grid item md={5} sm={12} xs={12} ><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae odio exercitationem libero iusto nihil amet earum facilis nostrum aliquam totam dignissimos sit excepturi laborum recusandae quia, eaque aliquid, eius rerum blanditiis non dicta nesciunt. Ipsam labore nobis dolorem delectus dolore saepe, amet assumenda ducimus aliquam fugiat sit placeat voluptatibus aperiam veniam quasi nemo voluptas quae cum. Veniam, placeat possimus debitis fugit doloribus, in natus minus ullam, nobis illo quidem numquam facere facilis obcaecati rem aut asperiores quisquam quae voluptates reiciendis ratione error libero? Similique id sit ad optio voluptatum nostrum provident adipisci exercitationem repellat, assumenda quisquam saepe officia error nisi?</p></Grid>
          <Grid item md={5} sm={12} xs={12} >
            <img src={codingImage} width="300px" height="300px" alt="illustration#2"></img>
          </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <img src={codingImage2} width="300px" height="300px" ></img>
            </Grid>
            <Grid item md={5} sm={12} xs={12}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto consequuntur laborum tenetur, eligendi amet voluptatem enim sapiente adipisci quidem ut similique ad autem consectetur a nulla iusto esse laboriosam nemo molestiae cum vero sequi illo quae! Quasi fuga in nesciunt tenetur vel voluptatibus sed ad nobis laudantium inventore voluptatum eaque, impedit laboriosam asperiores quidem ducimus corrupti quae hic voluptates tempora quis harum unde. Inventore ad incidunt illum at voluptatibus laudantium odit quo sunt veniam libero, quia impedit eum mollitia praesentium modi unde, provident doloremque blanditiis numquam doloribus culpa reiciendis neque vel? Error ullam asperiores hic consequatur consectetur sequi commodi.</p></Grid>
           */}


      </Fragment>
    )
  }
}

export default Home;
