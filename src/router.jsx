// import React from 'react'
import {  Route, Routes as Switch } from 'react-router-dom';
import Home from './home/home';
import About from './kafedra_about_page/about';
import Tadbirlar from './tadbirlar_page/tadbirlar';

const Router = () => {
  return (
    <Switch>
     <Route path="/" element={<Home/>} />
     <Route path='/kafedra' element={<About/>} />
     <Route path='/tadbirlar' element={<Tadbirlar/>}/>
    </Switch>
  )
}

export default Router