import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import Home from "./containers/Home/home";
import Products from "./containers/Products/products";
import Checkout from "./containers/Checkout";
import {Navigation} from "./components/Header/Navigation/navigation";


import {ROUTE} from "./constants/route";

import './App.css';
import ProductDetailsAction from "./store/actions/productDetailsActions";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./store/rootReducer";
import startRootSaga from "./store/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(startRootSaga);

store.dispatch({ type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS });

(window as any).shopspree = store;

function App() {
    return (
      <Provider store={store} >
          <div className="app-container">
              <BrowserRouter>
                  <Navigation />
                  <Routes>
                      <Route path={ROUTE.HOME} element={<Home />} />
                      <Route path={ROUTE.PRODUCTS} element={<Products />} />
                      <Route path={ROUTE.CHECKOUT} element={<Checkout />} />
                  </Routes>
              </BrowserRouter>
          </div>
      </Provider>
  );
}

export default App;
