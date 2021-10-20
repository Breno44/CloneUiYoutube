import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
  Hidden,
  Switch,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import VideoCall from "@material-ui/icons/VideoCall";

import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";

import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";

import AddCircle from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
  },
  logo: {
    height: "25px",
  },
  menuIcon: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  icons: {
    paddingRight: theme.spacing(3),
  },
  grow: {
    flexGrow: "1",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="inherit" className={classes.appBar}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>
            <img src="/images/preto.png" alt="logo" className={classes.logo} />
            <div className={classes.grow} />
            <IconButton color="inherit" className={classes.icons}>
              <VideoCall />
            </IconButton>
            <IconButton color="inherit" className={classes.icons}>
              <Apps />
            </IconButton>
            <IconButton color="inherit" className={classes.icons}>
              <MoreVert />
            </IconButton>
            <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">
              Fazer Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
