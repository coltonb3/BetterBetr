import  * as React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import axios from 'axios';
import Posts from './components/Posts/posts.js'



function App() {



  return (
    <div>
      <Posts/>
    
    </div>
  );
}

export default App;
