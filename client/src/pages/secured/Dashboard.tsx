import React, { useState } from 'react';

type BoardCard = {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeClass: string;
  avatars: string[];
  status?: string;
};

type BoardColumn = {
  title: string;
  accentClass: string;
  cards: BoardCard[];
};

const initialColumns: BoardColumn[] = [
  {
    title: 'TO DO',
    accentClass: 'border-slate-200',
    cards: [
      {
        id: 'PA-101',
        title: 'Refactor authentication middleware for high-load clusters',
        description: 'Improve resilience and decrease latency during peak traffic.',
        badge: 'Backend',
        badgeClass: 'bg-emerald-100 text-emerald-700',
        avatars: ['AB'],
      },
      {
        id: 'PA-104',
        title: 'Update typography scale to match Precision Architect v2 spec',
        description: 'Align type sizes and spacing with the new brand guidelines.',
        badge: 'Design',
        badgeClass: 'bg-rose-100 text-rose-700',
        avatars: ['MK'],
      },
      {
        id: 'PA-107',
        title: 'Define onboarding flow for new project templates',
        description: 'Make it easier for teams to start new workspaces quickly.',
        badge: 'UX',
        badgeClass: 'bg-blue-100 text-blue-700',
        avatars: ['LC'],
      },
    ],
  },
  {
    title: 'IN PROGRESS',
    accentClass: 'border-blue-500',
    cards: [
      {
        id: 'PA-88',
        title: 'API rate limiting implementation for public endpoints',
        description: 'Protect shared resources and ensure fair usage across teams.',
        badge: 'API',
        badgeClass: 'bg-slate-100 text-slate-700',
        avatars: ['JS'],
      },
      {
        id: 'PA-112',
        title: 'Improve board rendering performance on mobile',
        description: 'Reduce layout jitter and preserve touch responsiveness.',
        badge: 'Frontend',
        badgeClass: 'bg-slate-100 text-slate-700',
        avatars: ['CH'],
      },
    ],
  },
  {
    title: 'IN REVIEW',
    accentClass: 'border-rose-500',
    cards: [
      {
        id: 'PA-92',
        title: 'Fix visual glitch on mobile menu transition',
        description: 'Smooth the menu animation and remove the flicker.',
        badge: 'UI/UX',
        badgeClass: 'bg-emerald-100 text-emerald-700',
        avatars: ['KT', 'MN'],
      },
    ],
  },
  {
    title: 'DONE',
    accentClass: 'border-emerald-500',
    cards: [
      {
        id: 'PA-45',
        title: 'Initial database schema setup for Alpha nodes',
        description: 'Completed the first version of the project database model.',
        badge: 'Database',
        badgeClass: 'bg-slate-100 text-slate-700',
        avatars: ['TS'],
        status: 'completed',
      },
    ],
  },
];

const Dashboard: React.FC = () => {
  const [boardColumns, setBoardColumns] = useState<BoardColumn[]>(initialColumns);
  const [activeColumn, setActiveColumn] = useState<string | null>(null);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    cardId: string,
    sourceTitle: string,
  ) => {
    event.dataTransfer.setData('application/json', JSON.stringify({ cardId, sourceTitle }));
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, targetTitle: string) => {
    event.preventDefault();
    const payload = event.dataTransfer.getData('application/json');
    if (!payload) return;

    try {
      const { cardId, sourceTitle } = JSON.parse(payload) as { cardId: string; sourceTitle: string };
      if (sourceTitle === targetTitle) {
        setActiveColumn(null);
        return;
      }

      setBoardColumns((previous) => {
        const sourceIndex = previous.findIndex((column) => column.title === sourceTitle);
        const targetIndex = previous.findIndex((column) => column.title === targetTitle);
        if (sourceIndex === -1 || targetIndex === -1) return previous;

        const card = previous[sourceIndex].cards.find((item) => item.id === cardId);
        if (!card) return previous;

        return previous.map((column, index) => {
          if (index === sourceIndex) {
            return { ...column, cards: column.cards.filter((item) => item.id !== cardId) };
          }
          if (index === targetIndex) {
            return { ...column, cards: [...column.cards, card] };
          }
          return column;
        });
      });
    } catch {
      return;
    } finally {
      setActiveColumn(null);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
      <section className="mx-auto">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Project Alpha</p>
            <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">Kanban Board</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Track work across every stage from backlog to done. Easily scan priorities, owners, and live progress for your team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50">
              Add task
            </button>
            <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
              New project
            </button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-2">
          {boardColumns.map((column) => (
            <div
              key={column.title}
              className={`rounded-[32px] border ${column.accentClass} bg-white p-6 shadow-sm transition ${
                activeColumn === column.title ? 'ring-2 ring-blue-300' : ''
              }`}
              onDragOver={handleDragOver}
              onDragEnter={() => setActiveColumn(column.title)}
              onDragLeave={() => setActiveColumn(null)}
              onDrop={(event) => handleDrop(event, column.title)}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {column.title}
                  </h2>
                  <p className="mt-2 text-3xl font-extrabold text-slate-900">{column.cards.length}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-700">
                  {column.title.charAt(0)}
                </div>
              </div>

              <div className="space-y-4">
                {column.cards.map((card) => (
                  <div
                    key={card.id}
                    draggable
                    onDragStart={(event) => handleDragStart(event, card.id, column.title)}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {card.id}
                      </span>
                      {card.status === 'completed' ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                          ✓ Done
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${card.badgeClass}`}>
                        {card.badge}
                      </span>
                      <div className="flex -space-x-2">
                        {card.avatars.map((avatar) => (
                          <span
                            key={avatar}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-xs font-semibold text-white shadow-sm"
                          >
                            {avatar}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
