import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const cssStyles = makeStyles(theme => ({
    img: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -55%)",
        width: "90%",
        height: "90%",
    }
}));



function ImageModal(props) {
    const cssStyle = cssStyles();
    return (
        <Modal
            style={{borderRadius: "2%"}}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.handler}
            onClose={props.handler}
        >
            <img className={cssStyle.img} src={props.path}></img>
        </Modal>
    )
}

export default ImageModal;