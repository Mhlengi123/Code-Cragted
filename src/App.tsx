/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Briefing from './components/Briefing';
import PaymentPortal from './components/PaymentPortal';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';
import WhatsAppButton from './components/WhatsAppButton';
import SEO from './components/SEO';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'home';
      setActivePage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'pricing':
        return <Pricing key="pricing" />;
      case 'briefing':
        return <Briefing key="briefing" />;
      case 'payment':
        return <PaymentPortal key="payment" />;
      case 'home':
      default:
        return <Home key="home" />;
    }
  };

  const getPageSEO = () => {
    switch (activePage) {
      case 'pricing':
        return {
          title: "Pricing & Investment",
          description: "Explore our strategic pricing models for web engineering and managed digital infrastructure."
        };
      case 'briefing':
        return {
          title: "Request Strategic Briefing",
          description: "Initiate your digital transformation by providing your technical constraints and business objectives."
        };
      case 'payment':
        return {
          title: "Strategic Capital Transfer",
          description: "Secure gateway for project settlement and retainer deployment."
        };
      case 'home':
      default:
        return {};
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col font-sans selection:bg-accent/30 selection:text-primary">
        <SEO {...getPageSEO()} />
        <Navbar activePage={activePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <AIChatBot />
      <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
}
