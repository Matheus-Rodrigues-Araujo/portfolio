import './styles/App.scss';
import './styles/Contact.scss';
import './styles/Career.scss';
import './styles/Projects.scss';
import './styles/Inbox.scss';

import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>

  );
}

export default App;


