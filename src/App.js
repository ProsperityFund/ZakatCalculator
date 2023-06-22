import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Donation from './pages/Donation';

function App() {
  console.log("Running app!");
  return (
    <Routes>
      <Route path='/' element={<Calculator />}></Route>
      <Route path='/donate' element={<Donation />}></Route>
    </Routes>
  )
}

export default App;