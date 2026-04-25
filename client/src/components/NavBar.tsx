import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import Logo from "./Logo";

const NavBar: React.FC = () => {

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <header className="w-full bg-white py-4 shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="text-xl font-extrabold text-slate-900 leading-none pb-1">Workflow Manager</p>
            <p className="text-xs text-slate-500 leading-none">Precision Engineering for Modern Teams</p>
          </div>
        </Link>

        {isAuthenticated && (
          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-700">
            <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
            <Link to="/team" className="hover:text-blue-600 transition">Team</Link>
            <Link to="/timeline" className="hover:text-blue-600 transition">Timeline</Link>
            <Link to="/insights" className="hover:text-blue-600 transition">Insights</Link>
          </nav>
        )}

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
      </div>
    </header>
  );
};

export default NavBar;