import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

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
        <ReactPlayer height={"90%"} width={"70%"} className={cssStyle.img} playing={true} muted loop controls={true}  url={props.path} />
        </Modal>
    )
}

export default ImageModal;