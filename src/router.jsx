// import React from 'react'
import {  Route, Routes as Switch } from 'react-router-dom';
import Home from './home/home';
import About from './kafedra_about_page/about';

const Router = () => {
  return (
    <Switch>
     <Route path="/" element={<Home/>} />
     <Route path='/kafedra' element={<About/>} />
    </Switch>
  )
}

export default Router