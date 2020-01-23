import React, { Fragment } from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import ProjectInfo from './itemData.json';
import RenderItemWhole from './RenderItemWhole/renderItemWhole';
import { makeStyles } from '@material-ui/core/styles';
import HooppStatic from './HooppStatic/HooppStatic.js';

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
      <Container className={useStyle.container} >

        <Grid justify="space-around" container direction="rows" alignItems="flex-start" >
          <Grid item md={10} sm={12}>
          <Typography variant="h3" gutterBottom>
            <Box paddingTop="50px" fontWeight="fontWeightLight" >Work Experience</Box>
          </Typography>
          </Grid>
          <Grid item md={10} sm={12}>
            <h3>Systems Developer (co-op) - Healthcare of Ontario Pension Plan</h3>
          </Grid>
          <Grid item md={10} sm={12}>
            <HooppStatic></HooppStatic>
          </Grid>
        </Grid>
        
        <Grid container direction="column" alignItems="center">
          <Grid item md={12}>
          <Typography variant="h3" gutterBottom>
            <Box paddingTop="50px" paddingBottom="20px" fontWeight="fontWeightLight" >Cool things that I've built recently...</Box>
          </Typography>
          </Grid>
        <Grid item md={10}>
          {projectsArray.map((currentValue, currentIndex) => {
           // Return the element. Also pass key
           return (projectsArray.length === currentIndex ? <RenderItemWhole key={currentIndex} project={currentValue} renderHR={false}/> : <RenderItemWhole key={currentIndex} project={currentValue} renderHR={true} />)
        })}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default Projects;