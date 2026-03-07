import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CountryList from './components/CountryList';
import './App.css'
import EmployeeList from './components/Lab05/EmployeeList';
import EmployeeListIA from './components/Lab05IA/EmployeeListAI';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Administrador de empleados</h1>
      </header>
      <main>
        <EmployeeList />
      </main>

      <header className="App-header">
        <h1>Administrador de empleados IA</h1>
      </header>
      <main>
        <EmployeeListIA />
      </main>
      <footer>
        <p>CRUD de Países © 2026</p>
      </footer>
    </div>
  )
}
export default App