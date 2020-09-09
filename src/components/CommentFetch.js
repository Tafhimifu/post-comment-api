import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Comment from './Comment';
import {
    useParams
  } from "react-router-dom";
  

const CommentFetch = () => {
    const {postId} = useParams();
    const[comments,setComments] =useState([])
    useEffect( () => {
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))

      },[])
      
      
    return (
        <div>
            {
              comments.map(comment => <Comment comment ={comment}></Comment>)
              
            }
            
        </div>
    );
};

export default CommentFetch;