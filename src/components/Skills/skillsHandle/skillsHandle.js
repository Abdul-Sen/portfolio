import React, { Fragment } from 'react';
import SkillsCard from './skillsCard';
import { Grid } from '@material-ui/core';
import skillsData from './skillsData.json';
import SkillsRenderer from './skillsRenderer';
import Fade from 'react-reveal/Fade';


function SkillsHandle(props) {
    return (
        <Fragment>
            <Grid spacing={2} justify="space-around" container direction="row" alignItems="flex-start" >
                <Grid item md={6} sm={12} xs={12} >
                    <Fade left>
                        <SkillsCard title={"Frontend"} >
                            {
                                Object.entries(skillsData.frontend).map((value, index) => {
                                    let keyCount = (Object.keys(skillsData.frontend).length);
                                    return <SkillsRenderer key={index} title={value[0]} items={value[1]} addHr={keyCount == (index+1)? false:true}/>
                                })
                            }
                        </SkillsCard>
                    </Fade>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <Fade right>
                        <SkillsCard title={"Backend"}>
                        {
                                Object.entries(skillsData.backend).map((value, index) => {
                                    let keyCount = (Object.keys(skillsData.frontend).length);
                                    return <SkillsRenderer key={index} title={value[0]} items={value[1]} addHr={keyCount == (index+1)? false:true}/>
                                })
                        }
                        </SkillsCard>
                    </Fade>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default SkillsHandle;