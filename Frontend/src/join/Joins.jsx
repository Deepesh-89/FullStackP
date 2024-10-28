import React from 'react';
import Navbar from '../components/Navbar';
import Join from '../components/join';
import Footer from '../components/Footer';
import Signup from '../components/Signup';

function Joins() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Join/>
        
    </div>
      <Footer />
    </>
  );
}
export default Joins;
