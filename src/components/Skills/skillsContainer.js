import React, { Fragment } from 'react';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import SkillsHandle from './skillsHandle/skillsHandle';

function SkillsContainer(props) {
    return (
        <Container maxWidth={false} disableGutters={false}>
            <Grid justify="space-around" container direction="row" alignItems="flex-start" >
                <Grid item md={10} sm={12}>
                    <Typography variant="h3" gutterBottom>
                        <Box paddingTop="50px" fontWeight="fontWeightLight" >What I know</Box>
                    </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <SkillsHandle />
                </Grid>
            </Grid>
        </Container>
    )
}
export default SkillsContainer;