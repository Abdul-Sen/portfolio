import React, { Fragment, useState } from 'react';
import { ListItem, Grid, Card, CardActionArea, CardMedia, Button, Fab, ButtonGroup} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ImageDialog from './ImageDialogue';
import Fade from 'react-reveal/Fade';


const cssStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    content: {
        padding: "10px",
    },
    listItem: {
        marginBottom: "70px"
    },
    debugStyle: {
        borderStyle: "solid",
        padding: "10px",
    },
    paper: {
        borderRadius: "2em",
        maxHeight: "100%",
        maxWidth: "100%",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        boxShadow: "5px 5px 10px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        "&:hover": {
            boxShadow: "1px 8px 17px grey",
            transform: " translate(-4px, -4px)",
            transition: "all .4s ease"

        }
    },
    paperContent: {
        maxHeight: "300px",
        maxWidth: "auto",
        padding: "25px",
        borderRadius: "2em"
    },
    tagButton: {
        fontSize: "12px",
        color: "#39739d",
        backgroundColor: "#e1ecf4",
        borderColor: "#e1ecf4",
    },
    buttonGroup: {
        flexWrap: "wrap"
    }
}))

function RenderItemWhole(props) {
    const useStyle = cssStyles();
    const [showDialog,setShowDialog] = useState(false);

    const handleCardClick = (event) =>{
        setShowDialog(showDialog => !showDialog);
    }

    return (<Fragment>
        
        <Fade bottom>
        {/* { showDialog && <ImageDialog img={process.env.PUBLIC_URL + props.project.tileTile.gif}></ImageDialog>} */}
        <ListItem className={useStyle.listItem}>
            <div className={useStyle.root}>
                <Grid container spacing={10} direction="row">
                    <Grid item md={4} sm={12} xs={12}>
                        <h4>{props.project.tileTile.title}</h4>
                        <p>{props.project.tileTile.description}</p>
                        <Grid container >
                            <Grid item className={useStyle.content} md={12}>
                                <Grid container direction="row" spacing={3}>
                                    <Grid item md={6}>
                                        <Button  variant="outlined" target="_blank" href={props.project.tileTile.projectLink}>GitHub</Button>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Fab href={props.project.tileTile.demoLink} target="_blank" variant="extended" size="medium" color="primary">
                                            Demo
                                        <ArrowForwardIosIcon fontSize="small" />
                                        </Fab>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={8} sm={12} xs={12}>
                        <Card className={useStyle.paper}>
                            <CardActionArea onClick={handleCardClick}>
                                <CardMedia component="img" alt="card image failed to load" height="100%" image={process.env.PUBLIC_URL + props.project.tileTile.gif}>
                                </CardMedia>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={12}>  
                        <ButtonGroup className={useStyle.buttonGroup} size="small" aria-label="small outlined button group">
                            {
                                props.project.tileTile.tags.map((currentValue, currentIndex) => {
                                    return (<div key={currentIndex}>
                                        {(currentIndex === 0)? <span>Tech tags: </span> : null }
                                                <Button className={useStyle.tagButton}>{currentValue}</Button>
                                        </div>)
                                })
                            }
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>
        </ListItem>
        </Fade>
        {props.renderHR && <hr></hr>}
    </Fragment>);
}

export default RenderItemWhole;