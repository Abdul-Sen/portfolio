
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const cssStyles = makeStyles(theme => ({
  tagButton: {
    fontSize: "18px",
    color: "#39739d",
    backgroundColor: "#e1ecf4",
    borderColor: "#e1ecf4",
    textTransform: "none",
    margin: "3px"
  }
}));

export default function CustomizedExpansionPanels({ title, techSkills }) {
  const useStyle = cssStyles();
  return (
    <div>
      <p>
        {title}
      </p>
      <div>
        <span>Technical Domain: </span>
        {techSkills.map((currentValue, currentIndex) => {
          return (<Button className={useStyle.tagButton} key={currentIndex} > {currentValue} </Button>)
        })}
      </div>
    </div>
  );
}
