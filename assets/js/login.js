import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const login = document.querySelector('#login');
const error = login.getAttribute(`error`);
const url_log = login.getAttribute(`url-log`);
let last_username = login.getAttribute(`last-username`);
if(last_username = null) last_username = ''

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
});

function Login() {
  const classes = useStyles();

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
      <Card className={ classes.card }>
        <form action={ url_log } method="post">
          <CardContent>
            <TextField 
              id="username" 
              required
              fullWidth
              label="Username"
              name="_username"
              label="username"
              type="text"/>
            <TextField 
              id="password"
              required
              fullWidth
              label="Password"
              name="_password"
              label="Password"
              type="password"/>
          </CardContent>
          <CardActions>
            <Button type="submit" fullWidth>Login</Button>
          </CardActions>
        </form>
      </Card>
    </Grid>   
  </Grid> 
  );
}

ReactDom.render(<Login />, login);