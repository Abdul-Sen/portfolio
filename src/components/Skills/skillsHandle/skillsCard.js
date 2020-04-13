import React, {Fragment} from 'react';
import {Card, Paper, Typography,CardContent, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    root:{
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        // maxWidth:"90%",
        margin: "auto",
        maxWidth:"500px",
        minHeight: "700px"
    },
    title:{
        textAlign:"center"
    },

    body:{

    }
}));

function SkillsCard({children, title}){
    const cssClass = useStyles();
    return(
        <Fragment>
            
            <Card className={cssClass.root}>
                <CardContent>
                    <Typography display="block"  component={'span'} className={cssClass.title} variant={"h4"}>
                        <Box fontWeight={"300"}>
                        {title}
                        </Box>
                    </Typography>
                    <Typography component={'span'} className={cssClass.body}>
                    <Box fontWeight={"300"}>

                        {children}
                    </Box>
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default SkillsCard;