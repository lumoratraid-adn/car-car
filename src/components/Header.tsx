import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
interface HeaderProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}
export function Header({
  setCurrentPage,
  currentPage
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if header should be visible
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - reveal
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // close menu on escape, on resize to desktop, or when clicking outside
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsMenuOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!isMenuOpen) return;
      const target = e.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('click', onClick);
    };
  }, [isMenuOpen]);
  const navLinks = [{
    name: 'Home',
    value: 'home'
  }, {
    name: 'About',
    value: 'about'
  }, {
    name: 'Services',
    value: 'services'
  }, {
    name: 'Contact',
    value: 'contact'
  }];
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };
  return <header
    ref={headerRef}
    className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,padding,box-shadow,border-color] duration-500 transform border-b ${isVisible ? 'translate-y-0' : '-translate-y-full shadow-none'
      } ${scrolled || isMenuOpen
        ? 'bg-black/95 backdrop-blur-md border-white/10 py-1 shadow-lg shadow-black/50'
        : 'bg-transparent border-transparent py-1.5'
      }`}
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer group relative z-10" onClick={() => handleNavClick('home')}>
          <div className="flex items-center h-full absolute top-1/2 -translate-y-1/2 -left-8 md:-left-12">
            <img
              src="/Car Logo Only.svg"
              alt="Auto Vibe Car"
              className="h-[90px] md:h-[120px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 block translate-y-3 md:translate-y-4"
            />
            <img
              src="/logo text.svg"
              alt="Auto Vibe Text"
              className="h-[140px] md:h-[180px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 block translate-y-1 md:translate-y-2 -ml-5 md:-ml-7"
            />
            {/* Spacer to maintain horizontal layout since container is absolute */}
            <div className="w-72 md:w-[400px]" />
          </div>
          {/* Static spacer to maintain flow while the absolute content hangs */}
          <div className="h-12 md:h-16 w-72 md:w-[400px]" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => <button key={link.name} onClick={() => handleNavClick(link.value)} className={`text-sm font-medium transition-all duration-200 tracking-wide ${currentPage === link.value ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
            {link.name}
            {currentPage === link.value && <motion.div layoutId="underline" className="h-0.5 w-full bg-brand-gold mt-1" />}
          </button>)}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:8089314740" className="flex items-center px-4 py-2 text-sm font-bold text-white bg-brand-red hover:bg-brand-red-dark rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(229,25,18,0.5)]">
            <Phone className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">Get in Touch</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label="Toggle menu" className="p-3 text-white hover:text-red-500 transition-colors rounded-md touch-manipulation">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu overlay to close when tapping outside */}
    {isMenuOpen && <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setIsMenuOpen(false)} aria-hidden />}

    {/* Mobile Menu */}
    <AnimatePresence>
      {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-black/95 border-t border-white/10 backdrop-blur-xl overflow-hidden">
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map(link => <button key={link.name} onClick={() => handleNavClick(link.value)} className={`block w-full text-left px-4 py-4 rounded-lg text-base font-medium transition-colors ${currentPage === link.value ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
            {link.name}
          </button>)}
          <div className="pt-4 grid grid-cols-2 gap-3">
            <a href="tel:8089314740" className="flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-brand-red rounded-lg active:bg-brand-red-dark">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </a>
            <a href="https://wa.me/919074997502" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-green-600 rounded-lg active:bg-green-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>}
    </AnimatePresence>
  </header>;
}