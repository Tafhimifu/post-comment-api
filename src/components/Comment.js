import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import fakeImage from '../imageData';
import { useState } from 'react';
import './Comment.css';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: 1000,
      maxHeight:180,
      marginBottom:10,
    
      
      
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

const Comment = (props) => {
    const classes = useStyles();
    
    const images = fakeImage.slice(0,1)
    const [img,setImage] = useState(images);
    const {name,id,postId,email,body} = props.comment;
    
    
    
return (
    
<div className={classes.root}>
<Paper className={classes.paper} >
      <Grid  className="comment-detail" container spacing={1}>
      {
                img.map(image=><Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={image.image} />
                </ButtonBase>
                
                </Grid> )}
              <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    <h5>{name}</h5>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <h6>Email :{email}</h6>
                  </Typography>
                  <Typography variant="body2">
                    <h6>ID:{id}</h6>
                  </Typography>
               
               
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                   <p>{body}</p>
                  </Typography>
                  </Grid>
              </Grid>
              <Grid item>
     <Typography variant="subtitle1">{postId}</Typography>
              </Grid>
            </Grid>
        </Grid>
     </Paper>
        
  </div>
    
);
}

export default Comment;