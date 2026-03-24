

const Hero: React.FC = () => {
    return (
       <section className="w-full bg-[#EEF0FF] py-16">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:gap-16">
                <div className="flex flex-1 flex-col gap-4">
                    <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">Streamline Your <span className="text-blue-600">Team&apos;s Output</span></h1>
                    <p className="max-w-xl text-lg text-slate-600">The all-in-one platform for high-performing teams to manage projects, track progress, and collaborate in real-time.</p>
                    <div className="flex flex-wrap gap-4">
                        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow-lg transition hover:bg-blue-700">Get Started Free</button>
                        <button className="rounded-lg border border-slate-300 px-6 py-3 text-slate-700 transition hover:bg-slate-100">View Demo</button>
                    </div>
                </div>
                <div className="flex flex-1 justify-center">
                    <div className="h-[330px] w-full max-w-[500px] rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-black shadow-2xl"></div>
                </div>
            </div>
        </section>
    );
}
export default Hero;