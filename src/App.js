import Drawer from 'components/layout/Drawer';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import AboutUs from 'components/pages/AboutUs';
import GalleryPage from 'components/pages/GalleryPage';
import HomePages from 'components/pages/HomePages';
import NotFoundPage from 'components/pages/NotFoundPage';
import ScrollToTop from 'components/ScrollToTop';
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
        <ScrollToTop />
        <Header showNav={showNav} setShowNav={setShowNav} />
        <AnimatePresence>
          {showNav && <Drawer setShowNav={setShowNav} />}
        </AnimatePresence>
        <main className="h-full">
          <Routes>
            <Route path="/" element={<HomePages />} />

            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
