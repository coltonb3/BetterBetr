import  * as React from 'react';
import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';
import NavBar from './components/navbar';
import ProfilePage from './components/profilePage';






function App() {

  


  return (
    <div>
  
    <BrowserRouter>
    <Routes>
      <Route path = '/' element ={<LoginPage/>} />
      <Route path = '/home' element ={<HomePage/>} />
      <Route path = '/profile/:userId' element ={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
