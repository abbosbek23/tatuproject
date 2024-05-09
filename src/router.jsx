// import React from 'react'
import {  Route, Routes as Switch } from 'react-router-dom';
import Home from './home/home';
import About from './kafedra_about_page/about';
import Tadbirlar from './tadbirlar_page/tadbirlar';
import Iqtidorlibitiruvchilar from './iqtidorlilar/iqtidorlibitiruvchilar';
import Dissertatsiya from './dissertatsiya/dissertatsiya';

const Router = () => {
  return (
    <Switch>
     <Route path="/" element={<Home/>} />
     <Route path='/kafedra' element={<About/>} />
     <Route path='/tadbirlar' element={<Tadbirlar/>}/>
     <Route path='/iqtidorlilar' element={<Iqtidorlibitiruvchilar/>}/>
     <Route path='/dissertatsiya' element={<Dissertatsiya/>}/>
    </Switch>
  )
}

export default Router