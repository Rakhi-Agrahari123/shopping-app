import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Kids from './pages/Kids'
import TopStrip from './component/TopStrip';
import EmailSubscribtion from './component/EmailSubscribtion';
import Footer2 from './component/Footer2';
import Navbar from './component/Navbar';
import Women from './pages/Women';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Favrout from './pages/Favrout';

function App() {
  return (
    <div>
      <TopStrip />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/Women" element={<Women/>}></Route>
         <Route path="/kid" element={<Kids />}></Route>
         <Route path="/cart" element={<Cart />}></Route>
         <Route path="/signIn" element={<SignIn />}></Route>
         <Route path="/favrout" element={<Favrout />}></Route>
    
      </Routes>

      <EmailSubscribtion />
      <Footer2 />
    </div>
  );
}

export default App;