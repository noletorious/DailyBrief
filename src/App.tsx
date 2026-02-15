import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/context/auth-context'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

import LoginPage from '@/pages/login'
import SignupPage from '@/pages/signup'
import ForgotPasswordPage from '@/pages/forgot-password'
import BriefPage from '@/pages/dashboard/brief'
import StonksPage from '@/pages/dashboard/stonks'
import ScrollPage from '@/pages/dashboard/scroll'
import ProfilePage from '@/pages/dashboard/profile'
import BillingPage from '@/pages/dashboard/billing'

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<BriefPage />} />
              <Route path="/dashboard/stonks" element={<StonksPage />} />
              <Route path="/dashboard/scroll" element={<ScrollPage />} />
              <Route path="/dashboard/profile" element={<ProfilePage />} />
              <Route path="/dashboard/billing" element={<BillingPage />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
