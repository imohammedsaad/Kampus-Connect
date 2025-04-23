import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import InteractiveBackground from '../common/InteractiveBackground';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;