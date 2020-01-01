import React, { Fragment } from 'react';
import { Container, Grid, ListItem } from '@material-ui/core';
import ProjectInfo from './itemData.json';
import RenderItem from './RenderItem/renderItem';

function Projects(props) {
  let projectsArray = ProjectInfo.project;
  
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
          {projectsArray.map((currentValue, currentIndex) => {  
            console.log("Entered");
            console.log(currentValue);
           // Return the element. Also pass key     
           return (<RenderItem key={currentIndex} project={currentValue}/>) 
        })}

            {/* <RenderItem project={ProjectInfo.project[0]}></RenderItem>
            {projectsArray.map((currentValue,currentIndex)=>({
              return(<RenderItem key={i} answer={answer} /> )
            }))} */}

          </Grid>
        </Grid>

      </Container>
    </Fragment>
  )
}

export default Projects;