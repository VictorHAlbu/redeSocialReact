import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import Home from './pages/home';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './mock'

function App() {
  return (
    // themeProvider: customização da página com materi-ui
    <ThemeProvider theme={theme}> 
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="*" element={<h1>Not found 404!</h1>}/>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )  
}

export default App;
