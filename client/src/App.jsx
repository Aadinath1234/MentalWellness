import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body.jsx';
import Browse from './components/Browse.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
// import PlacesFormPage from './pages/PlacesFormPage.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import FAQ from './components/FAQ/Faq.jsx'; 
import Breathing from './components/BreathingComponent/BreathingSection.jsx'; 
import Books from './components/Books/Books.jsx'; 
import axios from 'axios';
import RewardTree from './components/RewardTree/RewardTree.jsx';
import Video from './components/Video/Video.jsx'; 
import Bubble from './components/Games/Bubble/Bubble.jsx'; 
import HeroCard from './components/HeroCard/HeroCard.jsx';
import HeroCard2 from './components/HeroCard/HeroCard2.jsx';  
import ColorMatch from './components/Games/ColorMatch/colorMatch.jsx'; 
import Memory from './components/Games/Memory/Memory.jsx'; 
import Card from './components/Card/Card.jsx';


axios.defaults.baseURL = 'https://mentalwellness-backend.onrender.com'; 
axios.defaults.withCredentials = true; 

const App = () => {
  return (
    <>
      {/* Wrapping the Routes inside a Router */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* You can optionally use Header outside of the Route */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/header' element={<Header />} />
          <Route path='/login' element={<Login />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/body' element={<Body />} />
          {/* <Route path='/placeformpage' element={<PlacesFormPage />} /> */}
          <Route path='/reward' element={<RewardTree />} />
          <Route path='/breathing' element={<Breathing />} />
          <Route path='/books' element={<Books />} />
          <Route path='/video' element={<Video />} />
          <Route path='/bubble' element={<Bubble/>} />
          <Route path='/color' element={<ColorMatch />} />
          <Route  path='/memory' element={<Memory />}   />
          <Route path='/HeroCard' element={<HeroCard />} />
          <Route path='/HeroCard2' element={<HeroCard2 />} />
         
         



        </Routes>
      </Router>
    </>
  );
};

export default App;
