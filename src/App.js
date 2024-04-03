import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import History from './Components/About/History';
import CoreValues from './Components/About/CoreValues';
import Tech from './Components/Innovative & Tech/Tech'
import Contact from './Components/Contact/Contact'
import Personal from './Components/Product/Personal'

function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="History/" element={<History/>}/>
        <Route path="CoreValues/" element={<CoreValues/>}/>
        <Route path="Contact/" element={<Contact/>}/>
        <Route path="Innovation&Technology/" element={<Tech/>}/>
        <Route path="PersonalCare/" element={<Personal/>}/>
      </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
