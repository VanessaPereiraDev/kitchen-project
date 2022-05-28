import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './views/drinks/home/header.js';
import Main from './views/drinks/home/main.js';
import Section from './views/drinks/home/section.js';
import Detail from './views/drinks/detail/detail.js';
import Info from './views/drinks/detail/info.js';

import Intro from './views/pratos/ingredients/intro';
import Ingredients from './views/pratos/ingredients/ingredients';
import Price from './views/pratos/ingredients/price';
import Home from './views/pratos/pratos/home';
import Search from './views/pratos/pratos/search';
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import InfoEnergeticas from './containers/pratos/InfoEnergerticas';
import Ingredientes from './containers/pratos/Ingredientes';


function App() {
  return (
    <div className="App">   
      <BrowserRouter>
        <Routes>
            <Route index element={<Navigate to="/home"/>} />
            {/*<Route exact path="/">
              <Route index element={<Home />}/>
              </Route>*/}
            <Route exact path="/home">
              <Route index element={<><Header/><Main/><Section/></>}/>
            </Route>
            <Route exact path="/detail">
              <Route index element={<><Header/><Detail/><Info/></>}/>
            </Route>
            <Route exact path="/pratos">
              <Route index element={<><Intro/><Home/><Search/></>}/>
            </Route>
            <Route exact path="/ingredients">
              <Route index element={<><Intro/><Ingredients/><Price/></>}/>
            </Route>
            <Route exact path="/infoenerg">
              <Route index element={<><Intro/><InfoEnergeticas/></>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

