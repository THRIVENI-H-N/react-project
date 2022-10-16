import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import Sandalwood from './components/Sandalwood';
import Music from './components/Music';
import Crops from './components/Crops';
import Literature from './components/Literature';
import Food from './components/Food';
import About from './components/About';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/sandalwood" element = {<Sandalwood/>}/>
    <Route path = "/music" element = {<Music/>}/>
    <Route path = "/crops" element = {<Crops/>}/>
    <Route path = "/literature" element = {<Literature/>}/>
    <Route path = "/food" element = {<Food/>}/>
    <Route path="pages/about/:id" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;