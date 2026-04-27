import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { RootState } from '../app/store';
import Logo from './Logo';

const navLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'Filters', to: '/filters' },
  { label: 'Dashboard', to: '/dashboard' },
];

const NavBar: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <header className="w-full bg-white py-4 shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-xl font-extrabold text-slate-900 leading-none pb-1">Workflow Manager</p>
            <p className="text-xs text-slate-500 leading-none">Precision Engineering for Modern Teams</p>
          </div>
        </Link>

        {isAuthenticated ? (
          <div className="hidden lg:flex w-full items-center justify-between gap-6">
            <nav className="flex items-center gap-8 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition ${isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <button className="inline-flex items-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
                Create
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100">
                <span className="text-lg">🔔</span>
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100">
                <span className="text-lg">?</span>
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100">
                <span className="text-lg">⚙️</span>
              </button>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-sm font-semibold text-white shadow-sm">
                PA
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/signin" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-800 transition"
            >
              Get Started
            </Link>
            <button className="inline-flex sm:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition">
              <span className="text-lg">☰</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;