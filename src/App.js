
import {Routes,Route,} from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Trekkings from './pages/Trekkings';
import About from './pages/About';
import TrekDetail from './pages/TrekDetail';
import Navbar from './components/Navbar';
import Foot from './components/Foot'


function App() {
  return (<>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trek/:id' element={<TrekDetail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/trekkings' element={<Trekkings/>}/>
      </Routes>
      <Foot/>
    </div>
  </>
  );
}

export default App;
