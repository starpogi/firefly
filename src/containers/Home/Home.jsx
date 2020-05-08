// @flow

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { Map, Logo } from '../../components';

const useStyles = makeStyles(theme => ({
  menu: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10000,
    padding: theme.spacing(1.5, 0)
  }
}));


const Home = ({
  ...props
}) => {  
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button className={classes.menu} variant="contained" component="span">
        <Logo />
      </Button>

      <Map />
    </React.Fragment>
  );
};

export default Home;
