import logo from './logo.svg';
import './App.css';
import './components/navbar'
import Navbar from './components/navbar';
import Body from './components/Body';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar />
      {/* <ItemListContainer greeting={'Bienvenidos!'} /> */}

        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
          <Route path="*" element={<h>404 NOT FOUND</h>} />
        </Routes>
      </BrowserRouter>
    </div>
    <Body />
    </>
  );
}

export default App;
