import { Link } from "react-router-dom";


const JoinTodayBanner: React.FC = () => {
    return (
        <section className="w-full py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Ready to boost your team&apos;s output?</h2>
                <p className="mt-4 text-lg md:text-xl text-slate-500">Join thousands of teams already using Workflow Manager to streamline their workflow.</p>
                <Link to="/signup" className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
                    Get Started Now
                </Link>
                <p className="mt-3 text-sm text-slate-400">©2026 Workflow Manager. By Cory Campbell</p>
            </div>
        </section>
    );
}
export default JoinTodayBanner;