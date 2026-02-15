import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader2, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/use-auth'

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error } = await resetPassword(email)
    setLoading(false)
    if (error) {
      setError(error)
    } else {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div className="w-full max-w-sm text-center space-y-3">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
          <span className="text-primary text-xl">✉</span>
        </div>
        <h2 className="font-heading text-xl font-semibold">Reset link sent</h2>
        <p className="text-sm text-muted-foreground">
          Check <strong className="text-foreground">{email}</strong> for a password reset link.
        </p>
        <Link to="/login" className="block text-sm text-primary hover:underline">
          Back to sign in
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm">
      <Link to="/login" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-3 w-3" /> Back to sign in
      </Link>
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-semibold text-foreground mb-1.5">
          Reset password
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and we'll send a reset link
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        {error && (
          <p className="text-xs text-destructive bg-destructive/10 px-3 py-2 rounded-md">
            {error}
          </p>
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : 'Send reset link'}
        </Button>
      </form>
    </div>
  )
}
