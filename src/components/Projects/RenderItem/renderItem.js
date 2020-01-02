import React from 'react';
import { ListItem, Card, Grid, Button, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const cssStyles = makeStyles(theme => ({
    card: {
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        transform: "scale(0.91)",
        "&:hover": {
            boxShadow: "1px 8px 17px grey",
            transform: "scale(0.93) translate(10px, -10px)",
            transition: "all .7s ease"
        },
        "&:hover img": {
            boxShadow: "1px 8px 17px grey",
            transform: "translate(0, -6px)",
            transition: "all 0.3s ease-out"
        },
        "& img": {
            borderRadius: "10px"
        }
    },
    flexItem: {
        marginLeft: "auto"
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
        <ListItem >
            <Card className={useStyle.card}>
                <Grid container direction="row">
                    <Grid item md={3} lg={3} sm={12} xs={12} className={useStyle.image}>
                        <img className={useStyle.image} src={process.env.PUBLIC_URL + props.project.tileTile.gif} width="200px" height="200px"></img>
                    </Grid>
                    <Grid item md={9} lg={9} className={useStyle.content}>
                        <Grid container direction="column" alignItems="stretch">
                            <Grid item>
                                <h4>{props.project.tileTile.title}</h4>
                            </Grid>
                            <Grid item className={useStyle.description}>
                                <p>{props.project.tileTile.description}</p>
                            </Grid>
                            <Grid item className={useStyle.content} md={12}>
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
                                    <Grid item className={useStyle.flexItem}>
                                        <Fab variant="extended" size="medium" color="primary">
                                            Navigate
                                            <ArrowForwardIosIcon fontSize="small" />
                                            </Fab>
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