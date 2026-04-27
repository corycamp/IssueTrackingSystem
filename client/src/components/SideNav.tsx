import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Board', to: '/dashboard', icon: '📊' },
  { label: 'Backlog', to: '/backlog', icon: '🗂️' },
  { label: 'Issues', to: '/issues', icon: '⚠️' },
  { label: 'Settings', to: '/settings', icon: '⚙️' },
];

const SideNav: React.FC = () => {
  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:w-[280px] flex-col rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-10 flex items-center gap-4 rounded-3xl bg-slate-50 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-600 text-sm font-bold text-white">
          PA
        </div>
        <div>
          <p className="text-base font-semibold text-slate-900">Project Alpha</p>
          <p className="text-sm text-slate-500">Software Project</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-center">
        <p className="text-sm font-semibold text-slate-900">Invite Team</p>
        <p className="mt-2 text-xs text-slate-500">Bring collaborators into the project.</p>
        <button className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Invite Team
        </button>
      </div>
    </aside>
  );
};

export default SideNav;
