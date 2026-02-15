import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/hooks/use-auth'

export default function ProfilePage() {
  const { user } = useAuth()
  const [name, setName] = useState(user?.user_metadata?.name || '')
  const [bio, setBio] = useState(user?.user_metadata?.bio || '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const email = user?.email || ''
  const initials = name
    ? name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
    : email.slice(0, 2).toUpperCase()

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    // Placeholder — will call Supabase auth.updateUser() when connected
    await new Promise(r => setTimeout(r, 600))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-8 max-w-lg">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Profile</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your account information.</p>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={user?.user_metadata?.avatar_url} />
          <AvatarFallback className="text-xl">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-foreground">{name || 'Your Name'}</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Display name</Label>
          <Input
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            disabled
            className="opacity-60"
          />
          <p className="text-xs text-muted-foreground">Email cannot be changed here.</p>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={bio}
            onChange={e => setBio(e.target.value)}
            placeholder="Tell us about yourself, your interests, or paste your resume..."
            className="min-h-[120px]"
          />
          <p className="text-xs text-muted-foreground">Used to personalise your brief and interview questions.</p>
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit" disabled={saving}>
            {saving ? <><Loader2 className="h-4 w-4 animate-spin" /> Saving…</> : 'Save changes'}
          </Button>
          {saved && (
            <span className="text-xs text-accent font-medium">Saved!</span>
          )}
        </div>
      </form>
    </div>
  )
}
