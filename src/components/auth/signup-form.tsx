import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/use-auth'

export function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error } = await signUp(email, password, name)
    setLoading(false)
    if (error) {
      setError(error)
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className="w-full max-w-sm">
        <div className="text-center space-y-3">
          <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
            <span className="text-accent text-xl">✓</span>
          </div>
          <h2 className="font-heading text-xl font-semibold">Check your email</h2>
          <p className="text-sm text-muted-foreground">
            We sent a confirmation link to <strong className="text-foreground">{email}</strong>.
            Click it to activate your account.
          </p>
          <Link to="/login" className="block mt-4 text-sm text-primary hover:underline">
            Back to sign in
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-semibold text-foreground mb-1.5">
          Create account
        </h1>
        <p className="text-sm text-muted-foreground">
          Start your daily brief today
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Min. 8 characters"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={8}
            autoComplete="new-password"
          />
        </div>

        {error && (
          <p className="text-xs text-destructive bg-destructive/10 px-3 py-2 rounded-md">
            {error}
          </p>
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Creating account…</> : 'Create account'}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link to="/login" className="text-primary hover:underline underline-offset-2 font-medium">
          Sign in
        </Link>
      </p>
    </div>
  )
}
