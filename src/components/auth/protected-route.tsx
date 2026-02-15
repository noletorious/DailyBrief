import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Skeleton } from '@/components/ui/skeleton'

export function ProtectedRoute() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-xs">DB</span>
          </div>
          <div className="space-y-2 w-32">
            <Skeleton className="h-2 w-full" />
            <Skeleton className="h-2 w-3/4 mx-auto" />
          </div>
        </div>
      </div>
    )
  }

  // Allow access without auth during development
  return <Outlet />
}
