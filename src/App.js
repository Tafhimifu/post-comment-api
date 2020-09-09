import React from 'react';
import './App.css';
import Header from './components/Header';
import NoMatch from './NoMatch/NoMatch';
import PostFetch from './components/PostFetch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './components/PostDetails';
import CommentFetch from './components/CommentFetch';

function App() {
  return (
    
      
      <Router><Switch>
          <Route path="/home">
            <Header/>
            <PostFetch/>
          </Route>
          <Route path="/post/:postId">
            
            <PostDetails/>
            <CommentFetch/>
            
           
           </Route>
          <Route exact path="/">
          <Header/>
            <PostFetch/>
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
            
          
        </Switch>
        </Router>
    
      
  
    
    
  )

}

export default App;
