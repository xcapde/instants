import './App.css';
import { Navbar } from './components/navbar/Navbar';
// import { NavbarBottom } from './components/navbar_bottom/NavbarBottom';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Home/>
      {/* <NavbarBottom/> */}
      
    </div>
  );
}

export default App;
