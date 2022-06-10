import react from 'react';
//containers
import InfoEnergeticas from '../containers/pratos/InfoEnergerticas';
import Ingredientes from '../containers/pratos/Ingredientes';
import Inicio from '../containers/pratos/Inicio';
import Apresentacao from '../containers/pratos/Apresentacao';
import Home from '../containers/bebidas/Apresentacao';
import Detail from '../containers/bebidas/Detail';
import Preparacao from '../containers/pratos/Preparacao';
//router
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom";

const Main = () => {
  return (
    <div className="App">   
      <BrowserRouter>
        <Routes>
            <Route index element={<Navigate to="/home"/>} />
            <Route exact path="/home">
              <Route index element={<><Home/></>}/>
            </Route>
            <Route exact path="/detail">
              <Route index element={<><Detail/></>}/>
            </Route>
            <Route exact path="/inicio">
              <Route index element={<><Inicio/></>}/>
            </Route>
            <Route exact path="/pratos">
              <Route index element={<><Apresentacao/></>}/>
            </Route>
            <Route exact path="/ingredients">
              <Route index element={<><Ingredientes/></>}/>
            </Route>
            <Route exact path="/preparacao">
              <Route index element={<><Preparacao/></>}/>
            </Route>
            <Route exact path="/infoenerg">
              <Route index element={<><InfoEnergeticas/></>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;

