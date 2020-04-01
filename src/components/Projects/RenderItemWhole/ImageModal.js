import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const cssStyles = makeStyles(theme => ({
    img: {
         position: "absolute",
         top: "50%",
         left: "50%",
         transform: "translate(-50%, -55%)",
         objectFit:"fill",
        [theme.breakpoints.up("md")]: {
            width: "90%",
            height: "90%",
            marginTop:15
        },
        [theme.breakpoints.down("md")]: {
            width: "90%",
            height: "60%"
        }

    }
}));



function ImageModal(props) {
    const cssStyle = cssStyles();
    return (
        <Modal
            open={true}
            onClose={props.handler}
        >
            <video className={cssStyle.img} loop autoPlay controls>
                <source  src={props.path} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
        </Modal>
    )
}

export default ImageModal;