import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Password reset email:', email);
    setSubmitted(true);
    // Handle password reset logic here
  };

  return (
    <div className="min-h-screen bg-[#EEF0FF] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.192 5.917M15 7a2 2 0 00-2-2m4 0a6 6 0 00-7.192 5.917M15 7h.01M15 7h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 4h.01" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Reset your password</h1>
            <p className="mt-2 text-slate-600">Enter your email address and we will send you a link to reset your password.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">WORK EMAIL</label>
                <div className="relative">
                  <div className="absolute left-3 top-3.5 text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-200 transition flex items-center justify-center gap-2"
              >
                Send Reset Link
                <span>→</span>
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-slate-900 font-semibold">Check your email</p>
              <p className="text-slate-600">We've sent a password reset link to {email}</p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail('');
                }}
                className="mt-4 text-blue-600 hover:underline font-semibold"
              >
                ← Try another email
              </button>
            </div>
          )}

          <div className="mt-6 border-t border-slate-200 pt-6">
            <a href="/signin" className="flex items-center justify-center gap-1 text-blue-600 hover:underline font-semibold">
              <span>←</span> Back to Log In
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1 text-xs text-slate-500">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L7.414 8l3.293 3.293a1 1 0 11-1.414 1.414l-4-4z" clipRule="evenodd" />
            </svg>
            Secure, encrypted connection
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
