import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollButton from "./ScrollButton";

const Layout = () => {
  return <>
      <Header />
        <div className='layout'>
            <Outlet />
            <ScrollButton/>
        </div>
      <Footer />
        </>
};

export default Layout;
