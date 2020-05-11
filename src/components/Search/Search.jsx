// @flow

import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import { Paper, InputBase, IconButton } from '@material-ui/core';
import { Magnify as SearchIcon } from 'mdi-material-ui';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

type SearchProps = {
  query: string,
  className?: string,
  ...
}

const Search = ({
  query,
  className,
  ...props
}: SearchProps) => {
  const classes = useStyles();
  
  return (
    <Paper 
      {...props}
      component="form" 
      className={clsx(className, classes.root)} 
    >
      <InputBase
        className={classes.input}
        placeholder="Search Firefly"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
