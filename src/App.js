import logo from './logo.svg';
import './App.css';
import './components/navbar'
import Navbar from './components/navbar';
import Body from './components/Body';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos!'} />
    </div>
    <Body />
    </>
  );
}

export default App;
