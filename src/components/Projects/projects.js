import React, { Fragment } from 'react';
import { Container, Grid, ListItem } from '@material-ui/core';
import ProjectInfo from './itemData.json';
function RenderItem(props) {
  return (
    <ListItem>
      
      <img src={props.project.tileTile.gif} alt="project gif"  width="250"/>
    </ListItem>
  );
}

function Projects(props) {
  console.log(ProjectInfo.project[0])

  return (
    <Fragment>
      <Container>
        <Grid container direction="column">
          <Grid item md={12}>
            <h1>Work Experience</h1>

          </Grid>
          <Grid item md={12}>
            <h3>Systems Developer (co-op) - Healthcare of Ontario Pension Plan</h3>
          </Grid>
          <Grid item md={12}>
            <h1>Projects</h1>
          </Grid>
          <Grid item md={12}>
            <RenderItem project={ProjectInfo.project[0]}></RenderItem>
          </Grid>
        </Grid>

      </Container>
    </Fragment>
  )
}

export default Projects;