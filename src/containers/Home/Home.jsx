// @flow
import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Fab } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { Radar as RadarIcon } from 'mdi-material-ui';

import { Map, Logo, Search } from '../../components';


const useStyles = makeStyles(theme => ({
  floating: {
    position: 'absolute',
    zIndex: 10000,
  },
  menu: {
    top: 20,
    left: 20,
    padding: theme.spacing(1.5, 0)
  },
  logo: {
    bottom: 10,
    left: '50%',
    right: '25%',
    padding: theme.spacing(1.5, 0)
  },
  searchBar: {
    top: 10,
    left: '38%',
    right: '25%',
  },
  rightMenu: {
    top: 10,
    right: 20
  },
  leftMenu: {
    top: 10,
    left: 20
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));


const Home = ({
  ...props
}) => {  
  const classes = useStyles();

  return (
    <React.Fragment>
      <Fab 
        size="small" 
        color="primary"
        aria-label="trucks"
        className={clsx(classes.floating, classes.rightMenu)}
      >
        <Avatar 
          className={classes.orange}
        >
          J
        </Avatar>
      </Fab>
      <Fab 
        size="small" 
        color="primary" 
        aria-label="me" 
        className={clsx(classes.floating, classes.leftMenu)}
      >
        <RadarIcon />
      </Fab>
      <Logo className={clsx(classes.floating, classes.logo)} />
      <Search className={clsx(classes.floating, classes.searchBar)} />
      <Map />
    </React.Fragment>
  );
};

export default Home;
