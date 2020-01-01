import React from 'react';
import { ListItem, Card, Box, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const cssStyles = makeStyles(theme => ({
    boxContainer: {
        backgroundColor: "red",
        flexDirection: "row",
        display: "flexbox",
    },
    content: {
        padding: "10px",
    },
    image: {
        textAlign: "center",
    },
    description: {
        marginBottom: "70px"
    }
}));

function RenderItem(props) {
    const useStyle = cssStyles();
    return (
        <ListItem>
            <Card >
                <Grid container direction="row">
                    <Grid item md={3} lg={3} sm={12} xs={12} className={useStyle.image}>
                        <img className={useStyle.image} src={process.env.PUBLIC_URL + props.project.tileTile.gif} width="200px" height="200px"></img>
                    </Grid>
                    <Grid item md={9} lg={9} className={useStyle.content}>
                        <Grid container direction="column" >
                        <Grid item>
                            <h4>{props.project.tileTile.title}</h4>
                            </Grid>
                            <Grid item className={useStyle.description}>
                                <p>{props.project.tileTile.description}</p>
                            </Grid>
                            <Grid item className={useStyle.content} md={9}>
                            <Grid container direction="row">
                                <Grid item>
                                    <Button>Source Code</Button>
                                </Grid>
                                <Grid item>
                                    <Button>Demo</Button>
                                </Grid>
                                <Grid item>
                                    <Button>
                                        <FavoriteBorderIcon></FavoriteBorderIcon>
                                    </Button>
                                </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </ListItem>
    );
}

export default RenderItem;