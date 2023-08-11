import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initalState';
import reducer from './context/reducer';

 const container = document.getElementById('root');
 const root = ReactDOM.createRoot(container);
  root.render(
   <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
   </BrowserRouter>
  );


