import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScopeSection from './components/ScopeSection';
import LawsSection from './components/LawsSection';
import ProcessSection from './components/ProcessSection';
import MythsSection from './components/MythsSection';
import RecoverySection from './components/RecoverySection';
import RightsAndTips from './components/RightsAndTips';
import Glossary from './components/Glossary';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import PdfExportButton from './components/PdfExportButton';
import TableOfContents from './components/TableOfContents';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-tajawal" dir="rtl">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-8 flex items-start gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents />
        </aside>
        <main className="flex-1 w-full min-w-0 space-y-8">
          <div id="scope"><ScopeSection /></div>
          <div id="laws"><LawsSection /></div>
          <div id="process"><ProcessSection /></div>
          <div id="myths"><MythsSection /></div>
          <div id="recovery"><RecoverySection /></div>
          <div id="rights"><RightsAndTips /></div>
          <Glossary />
          <ContactForm />
        </main>
      </div>
      <Footer />
      <ErrorBoundary>
        <PdfExportButton />
      </ErrorBoundary>
    </div>
  );
}

