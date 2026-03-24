

const WorkflowTile: React.FC = () => {
    return (
        <div className="w-full bg-[#EEF0FF] py-10 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Precision Workflow Management</h1>
                    <span className="mt-2 block h-1 w-14 bg-blue-600 rounded" />
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <article className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-lg transition">
                        <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-700">📋</div>
                        <h2 className="text-xl font-semibold mb-2">Ticket Tracking</h2>
                        <p className="text-sm text-slate-600 mb-4">Visualize the flow of work from backlog to done with clear priority levels and stages. Keep every task visible.</p>
                        <div className="h-24 rounded-lg bg-slate-100"></div>
                    </article>
                    <article className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-lg transition">
                        <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700">👥</div>
                        <h2 className="text-xl font-semibold mb-2">Real-time Collaboration</h2>
                        <p className="text-sm text-slate-600 mb-4">Multiple people working together on the same project seamlessly. Live updates and presence indicators keep everyone synced.</p>
                        <div className="h-24 rounded-lg bg-slate-100"></div>
                    </article>
                    <article className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-lg transition">
                        <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-pink-100 text-pink-700">🔄</div>
                        <h2 className="text-xl font-semibold mb-2">Lifecycle Management</h2>
                        <p className="text-sm text-slate-600 mb-4">Create tickets, add detailed comments, and update status in one place. Complete audit trails for every decision.</p>
                        <div className="h-24 rounded-lg bg-slate-100"></div>
                    </article>
                </div>
            </div>
        </div>
    );
}
export default WorkflowTile;