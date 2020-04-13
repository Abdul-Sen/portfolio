import React, { Fragment } from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import ProjectInfo from './itemData.json';
import RenderItemWhole from './RenderItemWhole/renderItemWhole';
import HooppStatic from './HooppStatic/HooppStatic.js';
import Fade from 'react-reveal/Fade';


function Projects(props) {
  let projectsArray = ProjectInfo.project;

  return (
    <Fragment>
      <Container id="projectsContainer" maxWidth={false} >
          <Grid justify="space-around" container direction="row" alignItems="flex-start" >
            <Grid item md={10} sm={12}>
              <Typography variant="h3" gutterBottom>
                <Box paddingTop="50px" fontWeight="fontWeightLight" >Work Experience</Box>
              </Typography>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Typography variant={"h6"} ><Box marginTop={"20px"} marginBottom={"20px"} fontWeight={"bolder"}>Systems Developer Coop - Healthcare of Ontario Pension Plan</Box></Typography>
            </Grid>
            <Grid item md={2} sm={12} xs={12}>
              <Typography variant={"body2"} ><Box marginTop={"20px"} textAlign={"end"}>(May - Dec 2019)</Box></Typography>
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
            <Fade Bottom >
            {projectsArray.map((currentValue, currentIndex) => {
              // Return the element. Also pass key
              return (projectsArray.length === currentIndex ? <RenderItemWhole key={currentIndex} project={currentValue} renderHR={false} /> : <RenderItemWhole key={currentIndex} project={currentValue} renderHR={true} />)
            })}
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default Projects;