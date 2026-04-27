import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Issue {
  id: string;
  key: string;
  title: string;
  description: string;
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  stage: 'In Progress' | 'Backlog' | 'Done' | 'To Do';
  assignee: {
    name: string;
    avatar: string;
    image?: string;
  };
  created: string;
}

const Issues: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);

  const [issues, setIssues] = useState<Issue[]>([
    {
      id: '1',
      key: 'ALPHA-101',
      title: 'Refactor authentication middleware for OAuth2',
      description: 'Integrate Google and GitHub providers',
      priority: 'HIGH',
      stage: 'In Progress',
      assignee: { name: 'Alex Rivera', avatar: 'AR', image: '👤' },
      created: 'Oct 12, 2023',
    },
    {
      id: '2',
      key: 'ALPHA-102',
      title: 'Fix memory leak in websocket reconnection logic',
      description: 'High frequency reconnect cycles during downtime',
      priority: 'CRITICAL',
      stage: 'Backlog',
      assignee: { name: 'Sarah Chen', avatar: 'SC', image: '👤' },
      created: 'Oct 14, 2023',
    },
    {
      id: '3',
      key: 'ALPHA-103',
      title: 'Update landing page assets for Q4 launch',
      description: 'Hero illustrations and partner logos',
      priority: 'LOW',
      stage: 'Done',
      assignee: { name: 'Jordan Day', avatar: 'JD', image: '👤' },
      created: 'Oct 15, 2023',
    },
    {
      id: '4',
      key: 'ALPHA-104',
      title: 'Design System: Implement Glassmorphism tokens',
      description: 'Tailwind config and component variables',
      priority: 'MEDIUM',
      stage: 'To Do',
      assignee: { name: 'Mark Wilson', avatar: 'MW', image: '👤' },
      created: 'Oct 15, 2023',
    },
    {
      id: '5',
      key: 'ALPHA-105',
      title: 'API rate limiting for public endpoints',
      description: 'Implement sliding window algorithm',
      priority: 'HIGH',
      stage: 'In Progress',
      assignee: { name: 'Alex Rivera', avatar: 'AR', image: '👤' },
      created: 'Oct 16, 2023',
    },
    {
      id: '6',
      key: 'ALPHA-106',
      title: 'Database connection pooling optimization',
      description: 'Reduce connection overhead in high-concurrency scenarios',
      priority: 'MEDIUM',
      stage: 'Backlog',
      assignee: { name: 'Sarah Chen', avatar: 'SC', image: '👤' },
      created: 'Oct 17, 2023',
    },
    {
      id: '7',
      key: 'ALPHA-107',
      title: 'Implement server-side caching strategy',
      description: 'Redis integration for frequently accessed data',
      priority: 'HIGH',
      stage: 'To Do',
      assignee: { name: 'Jordan Day', avatar: 'JD', image: '👤' },
      created: 'Oct 18, 2023',
    },
    {
      id: '8',
      key: 'ALPHA-108',
      title: 'Mobile responsiveness audit and fixes',
      description: 'Test across all breakpoints and device sizes',
      priority: 'MEDIUM',
      stage: 'In Progress',
      assignee: { name: 'Mark Wilson', avatar: 'MW', image: '👤' },
      created: 'Oct 19, 2023',
    },
  ]);

  const itemsPerPage = 4;

  // Filter issues
  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPriority =
      selectedPriorities.length === 0 || selectedPriorities.includes(issue.priority);
    const matchesStage =
      selectedStages.length === 0 || selectedStages.includes(issue.stage);

    return matchesSearch && matchesPriority && matchesStage;
  });

  // Pagination
  const totalPages = Math.ceil(filteredIssues.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedIssues = filteredIssues.slice(startIndex, startIndex + itemsPerPage);

  const getPriorityColor = (priority: string): string => {
    const colors: { [key: string]: string } = {
      CRITICAL: 'bg-red-100 text-red-700',
      HIGH: 'bg-red-100 text-red-700',
      MEDIUM: 'bg-amber-100 text-amber-700',
      LOW: 'bg-green-100 text-green-700',
    };
    return colors[priority] || 'bg-slate-100 text-slate-700';
  };

  const getStageColor = (stage: string): string => {
    const colors: { [key: string]: string } = {
      'In Progress': 'bg-blue-100 text-blue-700',
      'To Do': 'bg-slate-100 text-slate-700',
      Done: 'bg-emerald-100 text-emerald-700',
      Backlog: 'bg-slate-100 text-slate-700',
    };
    return colors[stage] || 'bg-slate-100 text-slate-700';
  };

  const handleExport = () => {
    console.log('Exporting issues...');
    // TODO: Implement export functionality
  };

  const handleIssueClick = (issueKey: string) => {
    navigate(`/issue/${issueKey}`);
  };

  const togglePriorityFilter = (priority: string) => {
    setSelectedPriorities((prev) =>
      prev.includes(priority) ? prev.filter((p) => p !== priority) : [...prev, priority]
    );
    setCurrentPage(1);
  };

  const toggleStageFilter = (stage: string) => {
    setSelectedStages((prev) =>
      prev.includes(stage) ? prev.filter((s) => s !== stage) : [...prev, stage]
    );
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className="w-full space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">All Issues</h1>
          <p className="text-slate-600 mt-2">
            Track and manage your team's development progress
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between gap-4 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-2.5 border border-slate-200">
            <span className="text-slate-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search issues..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="flex-1 bg-transparent outline-none text-slate-900 placeholder-slate-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200 transition"
              >
                <span>⚙️</span>
                Filters
              </button>

              {showFilters && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 z-20 p-4 space-y-4">
                  {/* Priority Filter */}
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">PRIORITY</p>
                    <div className="space-y-2">
                      {['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].map((priority) => (
                        <label key={priority} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedPriorities.includes(priority)}
                            onChange={() => togglePriorityFilter(priority)}
                            className="w-4 h-4 rounded border-slate-300"
                          />
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getPriorityColor(priority)}`}>
                            {priority}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Stage Filter */}
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-sm font-semibold text-slate-700 mb-2">STAGE</p>
                    <div className="space-y-2">
                      {['In Progress', 'To Do', 'Done', 'Backlog'].map((stage) => (
                        <label key={stage} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedStages.includes(stage)}
                            onChange={() => toggleStageFilter(stage)}
                            className="w-4 h-4 rounded border-slate-300"
                          />
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStageColor(stage)}`}>
                            {stage}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleExport}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200 transition"
            >
              <span>📤</span>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Issues Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                  KEY
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                  SUMMARY
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                  PRIORITY
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                  STAGE
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                  ASSIGNEE
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
                  CREATED
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedIssues.map((issue) => (
                <tr
                  key={issue.id}
                  className="border-b border-slate-200 hover:bg-blue-50 transition cursor-pointer"
                  onClick={() => handleIssueClick(issue.key)}
                >
                  <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-blue-600 hover:text-blue-700">
                    {issue.key}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">
                    <div>
                      <p className="font-semibold">{issue.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{issue.description}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(issue.priority)}`}>
                      {issue.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStageColor(issue.stage)}`}>
                      {issue.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
                        {issue.assignee.avatar}
                      </div>
                      <span className="text-slate-900 font-medium">{issue.assignee.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {issue.created}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredIssues.length)} of {filteredIssues.length} issues
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              ←
            </button>

            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum: number;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                    currentPage === pageNum
                      ? 'bg-blue-600 text-white'
                      : 'border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="px-2 text-slate-400">...</span>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issues;
