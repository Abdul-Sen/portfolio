import React, { Fragment } from 'react';
import SkillsCard from './skillsCard';
import {Grid }from '@material-ui/core';
import skillsData from './skillsData.json';


function SkillsHandle(props) {

    // const mapper= ()=>{
    //     console.log(skillsData);
    // };
    return (
        <Fragment>
            <Grid justify="space-around" container direction="row" alignItems="flex-start" >
                <Grid item md={6} sm={12} xs={12} >
                    <SkillsCard title={"Frontend"}>
                        <p>hello this is card 1 child</p>

                    </SkillsCard>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <SkillsCard title={"Backend"}>
                        <p>hello this is card child</p>
                    </SkillsCard>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default SkillsHandle;