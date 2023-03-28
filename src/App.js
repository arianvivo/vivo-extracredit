import logo from './logo.svg';
import './App.css';
import './components/navbar'
import Navbar from './components/navbar';
import Body from './components/Body'
function App() {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>
    <Body />
    </>
  );
}

export default App;
