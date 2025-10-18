import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-footer text-white mt-20" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-primary text-white font-bold">f</span>
            <span className="font-heading text-lg tracking-wide">food</span>
          </a>
          <p className="text-sm text-gray-300 max-w-xs">
            Making time a good time by making food the good food.
          </p>
          <div className="flex items-center gap-3">
            <a aria-label="Twitter" href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83C22 6 23 4 23 3z"/>
              </svg>
            </a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
              </svg>
            </a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#menu" className="hover:text-white">Burgers</a></li>
            <li><a href="#menu" className="hover:text-white">Pizzas</a></li>
            <li><a href="#menu" className="hover:text-white">Desserts</a></li>
            <li><a href="#menu" className="hover:text-white">Drinks</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-300 text-sm">hello@goodfood.example</p>
          <p className="text-gray-300 text-sm">+1 (555) 555-5555</p>
          <p className="text-gray-300 text-sm mt-2">123 Food Street, Flavor Town</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © <span>{new Date().getFullYear()}</span> Good Food. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
