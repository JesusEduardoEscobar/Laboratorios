import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
// import './Clases/Primer'
// import './Clases/Segundo'
// import './Clases/Tercero'
// import './Clases/Cuarto'
//import Componente1 from './Lab01/Componente1'
import BancosComponent from "./Lab01/BancoComponent"
import Componente2 from './Lab01/Componente2'
import Componente3 from './Lab01/Componente3'
import Componente1 from './Lab02/Componente1'
import Componente1IA from './Lab02/Componente1IA'
//import Login from './Lab03/login'
import LoginIA from './Lab03/LoginIA'
import Usuarios from './Lab04/Usuarios'
import Empleados from './Lab04/Empleados'
import EmpleadosIA from './Lab04/EmpleadosIA'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Componente1/>
    <br/>
    <Componente2/>
    <br/>
    <Componente3/>
    <Componente1 />
    <Componente1IA /> 
    <Login />
    <LoginIA />*/}
    <Usuarios />
    <Empleados />
    <EmpleadosIA />
  </StrictMode>,
)
