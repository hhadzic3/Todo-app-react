import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  const history = useNavigate();

  function logOut() {
    sessionStorage.setItem("token", '');
    sessionStorage.clear();
    //e.preventDefault()
    localStorage.removeItem('token')
    history("/");
  }

  const userLink = (
    <div>
      <Button component={Link} to="/todo"> Todos </Button>
      <Button onClick={logOut}> Logout </Button>
    </div>
  )
  
  const loginRegLink = (
    <div>
      <Button component={Link} to="/" color="inherit"> Login </Button>
      <Button component={Link} to="/register" color="inherit"> Register </Button>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo app
          </Typography>
          {localStorage.token ? userLink : loginRegLink}
        </Toolbar>
      </AppBar>
    </div>
  );
}