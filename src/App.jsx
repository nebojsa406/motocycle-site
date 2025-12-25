import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MotorcyclePage } from "./pages/MotorcyclePage";
import { GearPage } from "./pages/GearPage";
import { PartsPage } from "./pages/PartsPage";
import { AccessoriesPage } from "./pages/AccessoriesPage";

import { UserPage } from "./pages/UserPage";
import { CartPage } from "./pages/CartPage";

import { Header } from './components/Header';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/motorcycles' element={ <MotorcyclePage /> } />
          <Route path='/gear' element={ <GearPage /> } />
          <Route path='/parts' element={ <PartsPage /> } />
          <Route path='/accessories' element={ <AccessoriesPage /> } />

          <Route path='/user' element={ <UserPage /> } />
          <Route path='/cart' element={ <CartPage /> } />
        </Routes>
      </BrowserRouter>
    </>
    
    
  )
}

export default App
