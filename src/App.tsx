import { useEffect, useState } from 'react';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Loader from './components/Loader';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handler = (e: CustomEvent<string>) => {
      if (e?.detail) setCurrentPage(e.detail)
    }
    window.addEventListener('navigate-to', handler as EventListener)
    return () => window.removeEventListener('navigate-to', handler as EventListener)
  }, [])
  useEffect(() => {
    // keep loader until the browser fires the load event (assets loaded)
    const onLoad = () => setLoading(false);
    window.addEventListener('load', onLoad);
    // fallback in case load doesn't fire within reasonable time
    const fallback = setTimeout(() => setLoading(false), 8000);
    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, [])
  useEffect(() => {
    // ensure page starts at top when route changes
    window.scrollTo(0, 0);
  }, [currentPage]);
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };
  return <div className="min-h-screen bg-black flex flex-col font-sans">
    {loading && <Loader />}
    <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
    <main className="flex-grow">{renderPage()}</main>
    <FloatingWhatsApp />
    <Footer />
  </div>;
}