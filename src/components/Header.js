import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import poster from '../images/header.jpg';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
 
  title: {
    flexGrow: 1,
    marginLeft:"50px",
    marginBottom:"10px",
  },
}));


const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root} >
        <AppBar position="static" color="default">
          <Toolbar>
           
            <Typography variant="h2"  className={classes.title} color="textSecondary">
              Posted Articles
            </Typography>
            <Button variant="contained" color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
     <div>
     <img width={1292} height={500} src={poster} alt=""/>
   </div>
   </div>
    
    );
};

export default Header;