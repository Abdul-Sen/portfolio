import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';


function SkillsRenderer({ title, items,addHr }) {
    return (
        <Fragment>
            <Typography  component={"span"} variant={"h6"}>{title}</Typography>
            <ul>
                {items.map((val, ind) => <li key={ind}>{val}</li>)}
            </ul>
            {addHr == true? <hr></hr>:""}
        </Fragment>
    )
}

export default SkillsRenderer;