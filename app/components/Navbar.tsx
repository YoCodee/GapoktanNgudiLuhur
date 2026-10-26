"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Ekspor", href: "#ekspor" },
  { label: "UMKM", href: "#umkm" },
  { label: "Agro Wisata", href: "#agro-wisata" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#1C3829]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo "Ngudi Luhur" matching Frame 9.png */}
          <Link
            href="#beranda"
            onClick={() => setActiveTab("Beranda")}
            className="text-2xl sm:text-3xl font-medium italic tracking-tight transition-opacity hover:opacity-90"
            style={{
              fontFamily: '"Literata", Georgia, serif',
              color: "#D4622E",
            }}
          >
            Ngudi Luhur
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`text-lg font-medium transition-colors duration-150 ${
                  activeTab === item.label
                    ? "text-[#D4622E]"
                    : "text-white/85 hover:text-white"
                }`}
                style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button "Hubungi Kami" */}
          <div className="hidden md:block">
            <Link
              href="#hubungi-kami"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-[#1C3829] text-sm font-semibold rounded-xl shadow hover:bg-neutral-100 active:scale-95 transition-all"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#D4622E] transition-colors focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden animate-fade-in">
          <div className="bg-[#1C3829] w-4/5 max-w-sm h-full pt-24 px-6 pb-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <p
                className="text-xs uppercase tracking-widest text-[#D4622E] font-bold"
                style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
              >
                Menu Utama
              </p>
              <div className="space-y-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`block text-lg font-medium ${
                      activeTab === item.label ? "text-[#D4622E]" : "text-white"
                    }`}
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="#hubungi-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-white text-[#1C3829] font-bold rounded-xl shadow text-center block"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
