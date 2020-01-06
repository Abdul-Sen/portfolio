import React, { Fragment } from 'react';
import { Container, Grid } from '@material-ui/core';
import ProjectInfo from './itemData.json';
// import RenderItem from './RenderItem/renderItem';
import RenderItemWhole from './RenderItemWhole/renderItemWhole';
import { makeStyles } from '@material-ui/core/styles';

const cssStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "rgba(238,238,238,0.2)"
  }
}));

function Projects(props) {
  let projectsArray = ProjectInfo.project;
  const useStyle = cssStyles();
  
  return (
    <Fragment>
      <Container className={useStyle.container}>
        <Grid container direction="column" alignItems="center" >
          <Grid item md={12}>
            <h1>Work Experience</h1>

          </Grid>
          <Grid item md={12}>
            <h3>Systems Developer (co-op) - Healthcare of Ontario Pension Plan</h3>
          </Grid>
          <Grid item md={12}>
            <h1>Cool things that I've built recently...</h1>
          </Grid>
          <Grid item md={10}>
          {projectsArray.map((currentValue, currentIndex) => {
           // Return the element. Also pass key     
           return (<RenderItemWhole key={currentIndex} project={currentValue}/>) 
        })}
          </Grid>
          {/* <Grid item md={12}>
          {projectsArray.map((currentValue, currentIndex) => {
           // Return the element. Also pass key     
           return (<RenderItem key={currentIndex} project={currentValue}/>) 
        })}
          </Grid> */}
        </Grid>
      </Container>
    </Fragment>
  )
}

export default Projects;