import React, {Fragment} from 'react';
import {Card, Paper, Typography,CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    root:{
        maxWidth:"90%",
        marginLeft:"5%"
    },
    title:{
        textAlign:"center"
    },

    body:{

    }
}));

const DisList = <ul>hello world?</ul>;
function SkillsCard({children, title}){
    const cssClass = useStyles();
    return(
        <Fragment>
            
            <Card className={cssClass.root}>
                <CardContent>
                    <Typography component={'span'} className={cssClass.title} variant={"h4"}>
                        {title}
                    </Typography>
                    <Typography component={'span'} className={cssClass.body}>
                        {children}
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default SkillsCard;