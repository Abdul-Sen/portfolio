import React, { Fragment } from 'react';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import SkillsHandle from './skillsHandle/skillsHandle';

function SkillsContainer(props) {
    return (
        <Container maxWidth={false} disableGutters={false}>
            <Grid spacing={2} id="skillsContainer" justify="space-around" container direction="row" alignItems="flex-start" >
                <Grid item md={10} sm={12}>
                    <Typography variant="h3" gutterBottom>
                        <Box paddingTop="50px" fontWeight="fontWeightLight" >What I know</Box>
                    </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <SkillsHandle />
                </Grid>
                <Grid item md={10} sm={12} xl={10}>
                    <Typography variant="subtitle2" gutterBottom={false}>
                        <Box display="inline" color="red">*&nbsp;</Box>
                        <Box display="inline"> - Preferred tool</Box>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
export default SkillsContainer;