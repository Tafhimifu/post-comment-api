import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './PostDetails.css';

import {
    useParams
  } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1100,
    marginBottom:20,
  },
  
}));

const PostDetails = () => {
  const classes = useStyles();
  const {postId} = useParams();
    
    const [post,setPost] = useState({});

     useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
         .then(res => res.json())
        .then(data => setPost(data))
      }, [])
      
    return (
      <div className="post-detail">
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid className="post" container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                <h4>PostId: {post.userId}</h4>
                </Typography>
                <Typography variant="body2" gutterBottom>
                 <h5>Title: {post.title}</h5>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 <h6>ID: {post.id}</h6>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <p>{post.body}</p>
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>

   <div className="comment">
     <p>Comments</p>
     </div>
      </div>
  );
}
export default PostDetails;