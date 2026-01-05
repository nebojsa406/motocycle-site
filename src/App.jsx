import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MotorcyclePage } from "./pages/MotorcyclePage";
import { GearPage } from "./pages/GearPage";
import { PartsPage } from "./pages/PartsPage";
import { AccessoriesPage } from "./pages/AccessoriesPage";

import { UserPage } from "./pages/UserPage";
import { CartPage } from "./pages/CartPage";
import { ItemPage } from "./pages/ItemPage";
import { OrdersPage } from './pages/OrdersPage';

import { Header } from './components/Header';
import { TempFooter } from './components/TempFooter';


import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return null;
}



function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path='/' element={ <HomePage /> } />

          <Route path='/motorcycles' element={ <MotorcyclePage /> } />
          <Route path='/gear' element={ <GearPage /> } />
          <Route path='/parts' element={ <PartsPage /> } />
          <Route path='/accessories' element={ <AccessoriesPage /> } />

          <Route path="/:category/:id" element={<ItemPage />} />

          <Route path='/user' element={ <UserPage /> } />
          <Route path='/cart' element={ <CartPage /> } />
          <Route path='/orders' element={ <OrdersPage /> } />

        </Routes>

        <TempFooter />
      </BrowserRouter>
    </>
    
    
  )
}

export default App
