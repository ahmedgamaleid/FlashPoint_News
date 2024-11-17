import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div className="page-container">
      <Navbar 
        username={props.username} 
        setIsLogin={props.setIsLogin} 
        islogin={props.islogin} 
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
