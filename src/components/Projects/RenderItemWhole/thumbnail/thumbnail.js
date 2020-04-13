import React, {Fragment} from 'react';
import './thumbnail.css';
function Thumbnail({source}){
    return (<Fragment>
<div className="video-thumbnail top-img">
        <img className="thumbnail-img" src={source} alt="Video thumbnail" />
        <div className="overlay">
            <img id="play-btn" src={process.env.PUBLIC_URL + "/images/play.png"} />
        </div>
</div>
    </Fragment>)
}
export default Thumbnail;