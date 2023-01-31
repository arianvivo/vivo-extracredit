import './App.css';
import Navbar from './components/navbar';
import Logo from './components/logo';
import CartWidget from './components/cartWidget';
import Menubar from './components/menubar';
import { useState } from 'react';


function App() {
  return (
    <>
   <Navbar>
    <Logo></Logo>
    <Menubar></Menubar>
    <CartWidget></CartWidget>
   </Navbar>
   </>
  );
}

export default App;