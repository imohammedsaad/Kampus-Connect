import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Clubs from './pages/Clubs';
import NotFound from './pages/NotFound';

// Components
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;