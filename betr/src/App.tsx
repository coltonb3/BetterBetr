import  * as React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Signin from './components/SignIn';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';


function App() {
  return (
    <div>
    <h1>Test</h1>
    <Signin/>
    </div>
  );
}

export default App;
