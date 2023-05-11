import logo from './logo.svg';
import './App.css';
import './components/navbar'
import Navbar from './components/navbar';
import Body from './components/Body';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
            <Route path='/cart' element={ <Cart />} />
            <Route path="*" element={<h>404 NOT FOUND</h>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
    <Body />
    </>
  );
}

export default App;
