
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Link
} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import './Post.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingLeft:50,
    paddingTop:2,
    height: 150,
    width: 1100,
    
  },
  
}));

const Post = (props) => {
  const{title,userId,id} = props.post;
  
    const [spacing, setSpacing] = React.useState(1);
    const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid  item xs={12}>
        <Grid container justify="center" className="post-section" alignItems="center" spacing={spacing}>
           
            <Grid direction="row"  item >
              
              <Paper className={classes.paper}>
               <h4>PostId : {userId}</h4>
               <h5>Title : {title}</h5>
                <Link to={`/post/${id}`}>see more....</Link>

              </Paper>
            </Grid>
        
        </Grid>
      </Grid>
     
    </Grid>
  );
}
export default Post;

