import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowRight, Code2, ShieldCheck, Mail } from 'lucide-react';
import { navItems, personalInfo, socialLinks } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect current active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B10]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Bishal Bal Home"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center font-display font-bold text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all">
              BB
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base tracking-wide flex items-center gap-1.5 group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-tight">
                Software Eng • Kyokushin 3rd Dan
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all transform active:scale-95 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#0A0E17]/95 border-b border-slate-800/90 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/70 text-xs font-mono text-slate-400">
            <span>NAVIGATION</span>
            <span className="text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
              Open to Opportunities
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1 h-1 rounded-full bg-cyan-400"></span>}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/70">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm shadow-md"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
