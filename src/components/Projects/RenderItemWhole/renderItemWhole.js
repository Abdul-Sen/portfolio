import React, { Fragment, useState } from 'react';
import {Box, ListItem, Grid, Card, CardActionArea, CardMedia, Button, Fab, ButtonGroup, Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImageModal from './ImageModal';
import Fade from 'react-reveal/Fade';
import Thumbnail from './thumbnail/thumbnail';


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
        margin: "auto",
        borderRadius: "2em",
        maxWidth: 768,
        maxHeight: 1024,
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        boxShadow: "5px 5px 10px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        '&:hover':{
            //Make play icon appear
        }
    },
    tagButton: {
        fontSize: "12px",
        color: "#39739d",
        backgroundColor: "#e1ecf4",
        borderColor: "#e1ecf4",
    },
    buttonGroup: {
        flexWrap: "wrap"
    },
    test:{
        objectFit:"fill",
        height:"350px",
    },
    playButton:{
        position: "absolute",
        top : "50%",
        left : "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0,
        '&:hover':{
            opacity: 1
        }
    }
}))

function RenderItemWhole(props) {
    const useStyle = cssStyles();
    const [showDialog, setShowDialog] = useState(false);

    const handleCardClick = (event) => {
        setShowDialog(showDialog => !showDialog);
    }

    return (<Fragment>
            <ListItem className={useStyle.listItem}>
                <div className={useStyle.root}>
                    {showDialog && <ImageModal path={props.project.tileTile.media} handler={handleCardClick} />}
                    <Grid container spacing={10} direction="row">
                        <Grid item md={4} sm={12} xs={12}>
                            <h4>{props.project.tileTile.title}</h4>
                            {/* <p>{props.project.tileTile.description}</p> */}
                            <Typography variant={"body1"}><Box >{props.project.tileTile.description}</Box></Typography>
                            <Grid container >
                                <Grid item className={useStyle.content} md={12}>
                                    <Grid container direction="row" spacing={3}>
                                        <Grid item md={6}>
                                            <Button variant="outlined" target="_blank" href={props.project.tileTile.projectLink}>GitHub</Button>
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
                                     <Thumbnail source={process.env.PUBLIC_URL + props.project.tileTile.thumbnail} />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={12}>
                            <ButtonGroup className={useStyle.buttonGroup} size="small" aria-label="small outlined button group">
                                {
                                    props.project.tileTile.tags.map((currentValue, currentIndex) => {
                                        return (<div key={currentIndex}>
                                            {(currentIndex === 0) ? <span>Tech tags: </span> : null}
                                            <Button className={useStyle.tagButton}>{currentValue}</Button>
                                        </div>)
                                    })
                                }
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </div>
            </ListItem>
        {props.renderHR && <hr></hr>}
    </Fragment>);
}

export default RenderItemWhole;