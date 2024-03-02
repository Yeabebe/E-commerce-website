import { useState } from "react";
import { ReactDOM } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import{Shop} from './Pages/shop/shop';
import {Cart} from './Pages/cart/cart'
import {Contact} from "./Pages/contact";
import { ShopContextProvider } from "./Context/shop-context";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<shop />} />
          <Route path="/contact" element = "<Contact/>"/>
          <Route path="/cart" element={<cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
