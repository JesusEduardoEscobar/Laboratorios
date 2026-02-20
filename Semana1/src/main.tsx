import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
// import './Clases/Primer'
// import './Clases/Segundo'
// import './Clases/Tercero'
// import './Clases/Cuarto'
//import Componente1 from './Lab01/Componente1'
import Componente2 from './Lab01/Componente2'
import Componente3 from './Lab01/Componente3'
import Componente1 from './Lab02/Componente1'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Componente1/>
    <br/>
    <Componente2/>
    <br/>
    <Componente3/> */}
    <Componente1 />
  </StrictMode>,
)
