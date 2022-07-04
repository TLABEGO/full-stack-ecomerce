import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from "./containers/Home/home";
import Products from "./containers/Products/Products";
import Checkout from "./containers/Checkout";
import {Navigation} from "./components/Header/Navigation/navigation";


import {ROUTE} from "./constants/route";

import './App.css';

function App() {
    return (
      <div className="app-container">
          <BrowserRouter>
          <Navigation />
          <switch>
              <Routes>
                  <Route path={ROUTE.HOME} element={<Home />} />
                  <Route path={ROUTE.PRODUCTS} element={<Products />} />
                  <Route path={ROUTE.CHECKOUT} element={<Checkout />} />
              </Routes>
          </switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
