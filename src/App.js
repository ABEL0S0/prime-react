import './App.css';
import {Navigation} from './components/Navigation.jsx'
import { Home } from './pages/Home.jsx';

//tema
import "primereact/resources/themes/lara-dark-indigo/theme.css"
//nucleo de prime
import "primereact/resources/primereact.min.css";
//iconos
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {About} from './pages/About.jsx';
import {Contact} from './pages/Contact.jsx';
import TablePrime from './pages/TablePrime.jsx';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navigation/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/table' element={<TablePrime/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
