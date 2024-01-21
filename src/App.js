import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './view/pages/navbar/Navbar';
import Home from './view/pages/home/Home';
import Blog from './view/pages/blog/Blog';
import Footer from './view/pages/footer/Footer';
import Classes from './view/pages/classes/Classes';
import AboutUs from './view/pages/aboutus/AboutUs';
import StoreFit from './view/pages/storepowfit/StoreFit';
import TimeTable from './view/pages/timetable/TimeTable';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
           <Route path='about' element={<AboutUs/>}/>
          <Route path='classes' element={<Classes />} />
          <Route path='store' element={<StoreFit />} />
          <Route path='timetable' element={<TimeTable />} />
        </Routes>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
