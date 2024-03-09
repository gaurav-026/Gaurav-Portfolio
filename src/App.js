import './styles/Header.css';
import './styles/Home.css';
import './App.css';
import './styles/Worksamples.css';
import './styles/Profiles.css';
import './styles/Footer.css';
import { BrowserRouter as Router,   Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Worksamples from './components/Worksamples';
import Profiles from './components/Profiles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/worksamples' element={<Worksamples/>}/>
        <Route path='/profile' element={<Profiles/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
