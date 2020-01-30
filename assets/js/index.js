import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

const index = document.querySelector('#index');
const username = index.getAttribute(`username`);

function App() {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <Grid item xs={3}>
      <CssBaseline />
      <Typography variant="h1" component="h2">
        Hello { username }!
      </Typography>
    </Grid>   
  </Grid> 
  );
}

ReactDom.render(<App />, index);