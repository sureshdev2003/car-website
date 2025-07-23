import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Vehicle from './component/Vechicle';
import About from './component/About';
import ScrollToTopButton from './component/ScrollToTopButton';
import Footer from './component/Footer';
import Auth from './Page/Auth'; // login/signup
import FleetPage from './component/FleetPage';
import CarDetailPage from './component/CarDetailPage';
import Booking from './component/Booking';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Vehicle />
              <About/>
              <ScrollToTopButton/>
              <Footer />
            </>
          }
        />
         <Route path="/about" element={<About />} />
        {/* Auth Route */}
        <Route path="/auth" element={<Auth />} />
         
        {/* Fleet Route */}
        <Route path="/fleet" element={<FleetPage />} />

        {/* Car Detail Route */}
        
      <Route path="/fleet/:carId" element={<CarDetailPage />} />
      
      <Route path='/booking' element={<Booking/>}/>
      <Route path="/footer" element={<Footer />} />
      </Routes>

    </Router>
  );
};

export default App;
