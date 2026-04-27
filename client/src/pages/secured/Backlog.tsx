import React, { useState, useEffect } from 'react';

interface BacklogIssue {
  id: string;
  key: string;
  summary: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'IN PROGRESS' | 'TO DO' | 'DONE';
  assignee: {
    name: string;
    avatar: string;
    email: string;
  };
}

interface ArchivedIssue {
  id: string;
  key: string;
  summary: string;
  status: 'ARCHIVED' | 'COMPLETED' | 'DEPRECATED';
  assignee: {
    name: string;
    avatar: string;
  };
}

const Backlog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'priority' | 'status' | 'assignee'>('priority');
  const [showFilters, setShowFilters] = useState(false);
  const [activeIssues, setActiveIssues] = useState<BacklogIssue[]>([
    {
      id: '1',
      key: 'ALPHA-102',
      summary: 'Integrate Auth0 with modern biometric provi...',
      priority: 'HIGH',
      status: 'IN PROGRESS',
      assignee: { name: 'Alex Rivera', avatar: 'AR', email: 'alex@example.com' },
    },
    {
      id: '2',
      key: 'ALPHA-103',
      summary: 'Database migration for multi-region clustering',
      priority: 'HIGH',
      status: 'TO DO',
      assignee: { name: 'Sarah Chen', avatar: 'SC', email: 'sarah@example.com' },
    },
    {
      id: '3',
      key: 'ALPHA-104',
      summary: 'UI Refresh: Apply new design tokens to das...',
      priority: 'MEDIUM',
      status: 'DONE',
      assignee: { name: 'Unassigned', avatar: '?', email: '' },
    },
    {
      id: '4',
      key: 'ALPHA-105',
      summary: 'Refactor legacy reporting module endpoints',
      priority: 'LOW',
      status: 'TO DO',
      assignee: { name: 'Marcus T.', avatar: 'MT', email: 'marcus@example.com' },
    },
    {
      id: '5',
      key: 'ALPHA-106',
      summary: 'API documentation for external developer po...',
      priority: 'MEDIUM',
      status: 'TO DO',
      assignee: { name: 'Alex Rivera', avatar: 'AR', email: 'alex@example.com' },
    },
  ]);

  const [archivedIssues, setArchivedIssues] = useState<ArchivedIssue[]>([
    {
      id: 'arch1',
      key: 'ALPHA-082',
      summary: 'Legacy jQuery UI component removal',
      status: 'ARCHIVED',
      assignee: { name: 'Sarah Chen', avatar: 'SC' },
    },
    {
      id: 'arch2',
      key: 'ALPHA-044',
      summary: 'Internet Explorer 11 Polyfill fix',
      status: 'DEPRECATED',
      assignee: { name: 'Unassigned', avatar: '?' },
    },
  ]);

  const filteredActiveIssues = activeIssues.filter((issue) =>
    issue.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPriorityColor = (priority: string): string => {
    const colors: { [key: string]: string } = {
      HIGH: 'bg-red-100 text-red-700',
      MEDIUM: 'bg-green-100 text-green-700',
      LOW: 'bg-slate-100 text-slate-700',
    };
    return colors[priority] || 'bg-slate-100 text-slate-700';
  };

  const getStatusColor = (status: string): string => {
    const colors: { [key: string]: string } = {
      'IN PROGRESS': 'bg-blue-100 text-blue-700',
      'TO DO': 'bg-slate-100 text-slate-700',
      DONE: 'bg-emerald-100 text-emerald-700',
      ARCHIVED: 'bg-slate-100 text-slate-700',
      COMPLETED: 'bg-emerald-100 text-emerald-700',
      DEPRECATED: 'bg-slate-100 text-slate-700',
    };
    return colors[status] || 'bg-slate-100 text-slate-700';
  };

  const handleCreateIssue = () => {
    // TODO: Open create issue modal
    console.log('Create new issue');
  };

  const handleSortChange = (newSort: 'priority' | 'status' | 'assignee') => {
    setSortBy(newSort);
  };

  return (
    <div className="w-full space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Backlog</h1>
          <p className="text-slate-600 mt-2">
            Manage and prioritize your upcoming technical requirements and user stories for Project Alpha.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between gap-4 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-2.5 border border-slate-200">
            <span className="text-slate-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search backlog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-slate-900 placeholder-slate-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200 transition"
            >
              <span>⚙️</span>
              Filter
            </button>

            <div className="relative">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200 transition">
                <span>↕️</span>
                Sort
              </button>
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 z-10 hidden hover:block">
                <button
                  onClick={() => handleSortChange('priority')}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-50 ${sortBy === 'priority' ? 'text-blue-600 font-semibold' : 'text-slate-700'}`}
                >
                  By Priority
                </button>
                <button
                  onClick={() => handleSortChange('status')}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-50 ${sortBy === 'status' ? 'text-blue-600 font-semibold' : 'text-slate-700'}`}
                >
                  By Status
                </button>
                <button
                  onClick={() => handleSortChange('assignee')}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-50 ${sortBy === 'assignee' ? 'text-blue-600 font-semibold' : 'text-slate-700'}`}
                >
                  By Assignee
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Backlog Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            ACTIVE BACKLOG ({filteredActiveIssues.length} ITEMS)
          </h2>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Key
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Summary
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Assignee
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredActiveIssues.map((issue) => (
                  <tr
                    key={issue.id}
                    className="border-b border-slate-200 hover:bg-blue-50 transition cursor-pointer"
                    onClick={() => console.log('View issue:', issue.key)}
                  >
                    <td className="px-6 py-4 text-sm font-bold text-blue-600 hover:text-blue-700">
                      {issue.key}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                      {issue.summary}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(issue.priority)}`}
                      >
                        {issue.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(issue.status)}`}
                      >
                        {issue.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-700">
                          {issue.assignee.avatar}
                        </div>
                        <span className="text-slate-900 font-medium">{issue.assignee.name}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Create New Issue Row */}
          <div
            onClick={handleCreateIssue}
            className="border-t border-slate-200 px-6 py-4 text-center text-slate-600 hover:bg-slate-50 transition cursor-pointer"
          >
            <button className="text-slate-600 font-semibold hover:text-blue-600 transition">
              + Create new issue
            </button>
          </div>
        </div>
      </div>

      {/* Archived Tasks Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">ARCHIVED TASKS</h2>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Key
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Summary
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Assignee
                  </th>
                </tr>
              </thead>
              <tbody>
                {archivedIssues.map((issue) => (
                  <tr
                    key={issue.id}
                    className="border-b border-slate-200 hover:bg-slate-50 transition cursor-pointer last:border-b-0"
                  >
                    <td className="px-6 py-4 text-sm font-bold text-slate-500">
                      {issue.key}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 font-medium">
                      {issue.summary}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(issue.status)}`}
                      >
                        {issue.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-700">
                          {issue.assignee.avatar}
                        </div>
                        <span className="text-slate-600">{issue.assignee.name}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* View All Link */}
          <div className="px-6 py-4 text-center border-t border-slate-200">
            <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition">
              VIEW ALL ARCHIVED PROJECTS →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backlog;
