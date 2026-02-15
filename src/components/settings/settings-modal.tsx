import { LogOut, Moon, Sun } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/hooks/use-auth'
import { useTheme } from '@/hooks/use-theme'

interface SettingsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  const { user, signOut } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const name = user?.user_metadata?.name || user?.email?.split('@')[0] || 'User'
  const email = user?.email || ''
  const initials = name.slice(0, 2).toUpperCase()

  const handleSignOut = async () => {
    await signOut()
    onOpenChange(false)
    navigate('/login')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Manage your account and preferences.</DialogDescription>
        </DialogHeader>

        {/* User info */}
        <div className="flex items-center gap-3 py-2">
          <Avatar className="h-11 w-11">
            <AvatarImage src={user?.user_metadata?.avatar_url} />
            <AvatarFallback className="text-sm">{initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="font-medium text-sm text-foreground truncate">{name}</p>
            <p className="text-xs text-muted-foreground truncate">{email}</p>
          </div>
        </div>

        <Separator />

        {/* Theme toggle */}
        <div className="flex items-center justify-between py-1">
          <div>
            <p className="text-sm font-medium text-foreground">Theme</p>
            <p className="text-xs text-muted-foreground">
              Currently {theme === 'dark' ? 'dark' : 'light'} mode
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="gap-2"
          >
            {theme === 'dark' ? (
              <><Sun className="h-3.5 w-3.5" /> Light</>
            ) : (
              <><Moon className="h-3.5 w-3.5" /> Dark</>
            )}
          </Button>
        </div>

        <Separator />

        {/* Sign out */}
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
      </DialogContent>
    </Dialog>
  )
}
