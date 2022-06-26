import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { FormsHooks } from './components/02-useEffect/FormsHooks';
//import { Hookapp } from './Hookapp';
// import { ContadorApp } from './components/01-useState/ContadorApp';
// import { Contadorwishook } from './components/01-useState/Contadorwishook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { MulplesHooks } from './components/03-ejemplos/MulplesHooks';
// import { FocusInput } from './components/04-useRef/FocusInput';
// import { RealEjemploRef } from './components/04-useRef/RealEjemploRef';
// import { Layout } from './components/05-useLaiyout/Layout';
// import { Memoria } from './components/06-memo/Memoria';
// import { MemoHooks } from './components/06-memo/MemoHooks';
// import { CallMemo } from './components/06-memo/CallMemo';
// import { Padre } from './components/07-tarea-memo/Padre';
// import './components/08-useReducer/intro-reduser';
//import { AppReducer } from './components/08-useReduces/usoReducer';
//import { TodoApp } from './components/08-useReducer/TodoApp';


import { MainPage } from './components/09-useContext/MainPage';
//
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <>
      <MainPage />
    </>
  </BrowserRouter>

);


