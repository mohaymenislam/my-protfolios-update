import React from 'react';
// @@@@@@@@@@@@@@ style body App.css
import './App.css';

// Navbar
import Navbar from './components/Navbar/Navbar';
// Home
import Home from './components/Home/Home';
// About
import About from './components/About/About';
// Skills
import Skills from './components/Skills/Skills';
// portfolio
import Portfolio from './components/Portfolio/Portfolio';

// Testimonial
import Testimonial from './components/Testimonial/Testimonial';

//contact 
import Contact from './components/Contact/Contact';
// footer
import Footer from './components/Footer/Footer';
// scoll button
import BackToTop from './components/BackToTop/BackToTop';
// React Router
import { Route, Routes } from 'react-router-dom';

// const lazePortfolio = React.lazy(() => import('./components/Portfolio/Portfolio'))

const App = () => {
  return (
    <>  

    {/* @@@@@@@@@@@@@@@  navbar  start @@@@@@@@@@@@@@@@@@ */}
            <Navbar></Navbar>    
        {/* @@@@@@@@@@@@@@@  navbar  end @@@@@@@@@@@@@@@@@@ */}


        {/* @@@@@@@@@@@@@@@  React Router dom start @@@@@@@@@@@@@@@@@@ */}

          <Routes>
             <Route path='/' element={<Home></Home>}></Route>
             <Route path='/about' element={<About></About>}></Route>
             <Route path='/skills' element={<Skills></Skills>}></Route>  
          
              <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
              <Route path='/testimonial' element={<Testimonial></Testimonial>}></Route>        
              <Route path='/contact' element={<Contact></Contact>}></Route> 
               {/* <Route path='/portfolio' element={<React.Suspense fallback="Loading..."><lazePortfolio></lazePortfolio> </React.Suspense>}></Route> */}
          </Routes>   

        {/* @@@@@@@@@@@@@@@   React Router dom end @@@@@@@@@@@@@@@@@@ */} 

          {/* @@@@@@@@@@@@@@@   Back scroll To button  @@@@@@@@@@@@@@@@@@ */} 


                <BackToTop></BackToTop>
            {/* @@@@@@@@@@@@@@@   Back scroll To button  @@@@@@@@@@@@@@@@@@ */}

          {/* @@@@@@@@@@@@@@@   Footer start  @@@@@@@@@@@@@@@@@@ */} 
                   <Footer></Footer>
            {/* @@@@@@@@@@@@@@@   Footer end @@@@@@@@@@@@@@@@@@ */} 

              
    </>
    
  );
};

export default App;
