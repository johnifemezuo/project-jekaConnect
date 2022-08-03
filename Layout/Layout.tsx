import React from 'react'
import Footer from '../components/Global/Footer/Footer'
import Navbar from '../components/Global/Navbar/Navbar'
import TopButton from '../components/Global/TopButton/TopButton';

function Layout({children} : any)  {
  return (
    <div>
      <Navbar />
      {children}
      <TopButton />
      <Footer />
    </div>
  );
}

export default Layout