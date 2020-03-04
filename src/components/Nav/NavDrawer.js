import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import NavBarSelf from "./NavBarSelf";

const useStyles = makeStyles({
  list: {
    width: 240,
    paddingTop: "18px"
  },
  menuIcon: {
    padding:"10px"
  }
});

export default function NavDrawer() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
        <NavBarSelf display="mobile"></NavBarSelf>
      <Divider />
    </div>
  );

  return (
      <Fragment>
      <Button onClick={toggleDrawer("left", true)}>
      <MenuIcon className={classes.menuIcon}></MenuIcon>
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
      </Fragment>
  );
}
