import Drawer from 'components/layout/Drawer';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import HomePages from 'components/pages/HomePages';
import NotFoundPage from 'components/pages/NotFoundPage';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header showNav={showNav} setShowNav={setShowNav} />
        <AnimatePresence>
          {showNav && <Drawer setShowNav={setShowNav} />}
        </AnimatePresence>
        <main className="h-full">
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
