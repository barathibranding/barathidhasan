"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Barathidhasan
            </span>
            <span className="hidden md:inline-block text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium">
              Frontend Developer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/project"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              Contact
            </Link>
            <Link
              href="/Barathi-resume2025.pdf"
              target="_blank"
              download="Barathi-Dhasan-Resume.pdf"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
            >
              Download Resume
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg py-4 px-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/project"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/Barathi-resume2025.pdf"
                target="_blank"
                download="Barathi-Dhasan-Resume.pdf"
                className="w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-colors font-medium mt-2 shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Resume
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
