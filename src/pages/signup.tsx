import { Navigate } from 'react-router-dom'
import { SignupForm } from '@/components/auth/signup-form'
import { AuthLayout } from '@/components/auth/auth-layout'
import { useAuth } from '@/hooks/use-auth'

export default function SignupPage() {
  const { user, loading } = useAuth()
  if (!loading && user) return <Navigate to="/dashboard" replace />
  return <AuthLayout><SignupForm /></AuthLayout>
}
