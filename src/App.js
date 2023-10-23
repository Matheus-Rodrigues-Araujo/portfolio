import './styles/App.scss';
import './styles/Projects.scss';
import './styles/Techs.scss';
import './index.css'
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>

  );
}

export default App;


