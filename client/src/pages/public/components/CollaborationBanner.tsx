

const CollaborationBanner: React.FC = () => {
    return (
        <section className="w-full bg-[#EEF0FF] py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div className="rounded-3xl border border-[#d9e7f2] bg-white p-6 md:p-8 shadow-lg shadow-slate-200/60">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex gap-2">
                                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">JD</div>
                                <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">AM</div>
                                <div className="h-8 w-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-semibold">+3</div>
                            </div>
                            <span className="text-xs font-semibold text-rose-500">• LIVE SYNC</span>
                        </div>
                        <div className="space-y-3">
                            <div className="h-12 rounded-lg bg-slate-100 items-center justify-center flex">
                                <h1 className="text-lg font-bold text-slate-600">Design</h1>
                            </div>
                            <div className="h-12 rounded-lg bg-blue-500 items-center justify-center flex">
                                <h1 className="text-lg font-bold text-slate-800">Build</h1>
                            </div>
                            <div className="h-12 rounded-lg bg-emerald-500 items-center justify-center flex">
                                <h1 className="text-lg font-bold text-slate-800">Deploy</h1>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-2">
                            <div className="h-2 w-14 rounded-full bg-slate-200"></div>
                            <div className="h-2 w-10 rounded-full bg-blue-200"></div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Modern Collaboration</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Build Together, Faster Than Ever.</h2>
                        <p className="text-lg text-slate-600 max-w-2xl">Experience zero-latency updates across your entire workspace. When a teammate updates a ticket, adds a comment, or shifts a priority, everyone sees it instantly. No more refreshing, no more conflicts.</p>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✔</span>
                                <span className="text-base text-slate-700">Presence indicators show who&apos;s active</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✔</span>
                                <span className="text-base text-slate-700">Real-time thread notifications</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">✔</span>
                                <span className="text-base text-slate-700">Optimistic UI for zero lag feeling</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CollaborationBanner;