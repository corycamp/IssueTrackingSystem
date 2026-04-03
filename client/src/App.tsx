import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import LandingPage from './pages/public/LandingPage';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/secured/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './pages/auth/ForgotPassword';
import PageProvider from './components/PageProvider';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PageProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        </PageProvider>
      </Router>
    </Provider>
  );
}

export default App;
