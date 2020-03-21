import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const cssStyles = makeStyles(theme => ({
    img: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -55%)",
        [theme.breakpoints.up("md")]: {
            width: "90%",
            height: "90%",
        },
        [theme.breakpoints.down("md")]:{
            width: "90%",
            height: "60%"
        }

    }
}));



function ImageModal(props) {
    const cssStyle = cssStyles();
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={true}
            onClose={props.handler}
        >
            <img className={cssStyle.img} src={props.path}></img>
        </Modal>
    )
}

export default ImageModal;