import React from 'react';
import Navbar from '../components/Navbar';
import Price from '../components/Price';
import Footer from '../components/Footer';

function Prices() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
        <Price/>
    </div>
    <Footer/>
    </>
  )
}
export default Prices;
