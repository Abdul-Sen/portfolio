import React, {Fragment} from 'react';
import './thumbnail.css';
function Thumbnail({source}){
    return (<Fragment>
<div class="video-thumbnail top-img">
        <img class="thumbnail-img" src={source} alt="Video thumbnail" />
        <div class="overlay">
            <img id="play-btn" src={process.env.PUBLIC_URL + "/images/play.png"} />
        </div>
</div>
    </Fragment>)
}
export default Thumbnail;