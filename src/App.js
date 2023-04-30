
import {Routes,Route,} from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Trekkings from './pages/Trekkings';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (<>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/trekkings' element={<Trekkings/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  </>
  );
}

export default App;
