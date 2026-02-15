import { Navigate } from 'react-router-dom'
import { LoginForm } from '@/components/auth/login-form'
import { AuthLayout } from '@/components/auth/auth-layout'
import { useAuth } from '@/hooks/use-auth'

export default function LoginPage() {
  const { user, loading } = useAuth()
  if (!loading && user) return <Navigate to="/dashboard" replace />
  return <AuthLayout><LoginForm /></AuthLayout>
}
