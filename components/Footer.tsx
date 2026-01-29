
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-white font-bold">HM</div>
              <span className="text-white text-xl font-bold">HM Digital</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering brands through cutting-edge digital craftsmanship. Based in Lahore, serving the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.path}><Link to={item.path} className="hover:text-cyan-400 transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>{BUSINESS_INFO.address}</li>
              <li>{BUSINESS_INFO.whatsapp}</li>
              <li>{BUSINESS_INFO.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-xs mb-4">Stay updated with the latest trends.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-cyan-500" />
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg hover:bg-cyan-600 transition-colors">→</button>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} HM Digital Solutions. All Rights Reserved. Designed with ❤️ for excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
