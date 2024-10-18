import { useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl">
            Goods Paradise
          </Link>
          <button onClick={toggleMenu} className="block md:hidden">
            ☰
          </button>
          {/* Desktop Menu */}
          <ul className={`hidden md:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            </li>
          </ul>
        </div>

        {/* Responsive Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-grow p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <div className="space-y-2">
          <p>Goods Paradise &copy; {new Date().getFullYear()}</p>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
