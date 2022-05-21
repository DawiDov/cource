import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "containers/HomePage"
import Layout from "./components/layoutComponents/Layout"
import Theme from 'styles';
import LogIn from 'containers/LoginPage';



const  App = () => {
  return (
    <main>
      <Theme>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='login' element={<LogIn/>}/>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </Theme>
   </main>
  );
}

export default App;
