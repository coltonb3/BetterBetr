import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';
import ProfilePage from './components/profilePage';
import {useMemo} from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./themes";

function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  
  return (
    <div className="App">
        <p>TEST</p>
    <BrowserRouter>
    <ThemeProvider theme={mode}> 
    <CssBaseline />
    <Routes>
      <Route path = '/' element ={<LoginPage/>} />
      <Route path = '/home' element ={<HomePage/>} />
      <Route path = '/profile/:userId' element ={<ProfilePage/>} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
