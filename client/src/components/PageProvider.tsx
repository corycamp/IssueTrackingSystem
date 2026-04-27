import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import SideNav from './SideNav';
import { RootState } from '../app/store';

const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const isAuthenticated = true;

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      {isAuthenticated ? (
        <div className="mx-auto flex h-[calc(100vh-88px)] gap-6 px-4 py-8 sm:px-6 lg:px-10 overflow-hidden">
          <SideNav />
          <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
        </div>
      ) : (
        <main className="min-w-0 flex-1">{children}</main>
      )}
    </div>
  );
};
export default PageProvider;