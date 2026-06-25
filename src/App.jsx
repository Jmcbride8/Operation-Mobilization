import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import LaunchScreen from '@/components/om/LaunchScreen';
import Home from '@/pages/Home';
import BrandIdentity from '@/pages/BrandIdentity';
import AboutOM from '@/pages/AboutOM';
import Admin from '@/pages/Admin';
import TheMessage from '@/pages/TheMessage';
import GoSignUp from '@/pages/GoSignUp';
import Give from '@/pages/Give';
import MissionSenders from '@/pages/MissionSenders';
import MissionSupporters from '@/pages/MissionSupporters';
import MissionServants from '@/pages/MissionServants';
import TheFields from '@/pages/TheFields';
import Turnaround from '@/pages/Turnaround';
import Recapitalize from '@/pages/Recapitalize';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brand" element={<BrandIdentity />} />
      <Route path="/about" element={<AboutOM />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/message" element={<TheMessage />} />
      <Route path="/enlist" element={<GoSignUp />} />
      <Route path="/give" element={<Give />} />
      <Route path="/mission/senders" element={<MissionSenders />} />
      <Route path="/mission/supporters" element={<MissionSupporters />} />
      <Route path="/mission/servants" element={<MissionServants />} />
      <Route path="/fields" element={<TheFields />} />
      <Route path="/turnaround" element={<Turnaround />} />
      <Route path="/recapitalize" element={<Recapitalize />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {
  const [launchComplete, setLaunchComplete] = useState(
    () => sessionStorage.getItem("om_launched") === "true"
  );

  const handleLaunchComplete = () => {
    sessionStorage.setItem("om_launched", "true");
    setLaunchComplete(true);
  };

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          {!launchComplete && <LaunchScreen onComplete={handleLaunchComplete} />}
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App