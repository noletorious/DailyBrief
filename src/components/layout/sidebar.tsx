import { Newspaper, TrendingUp, Layers, User, Settings } from 'lucide-react'
import { SidebarNavItem } from './sidebar-nav-item'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/hooks/use-auth'

interface SidebarProps {
  onSettingsClick: () => void
}

export function Sidebar({ onSettingsClick }: SidebarProps) {
  const { user } = useAuth()

  const initials = user?.email
    ? user.email.slice(0, 2).toUpperCase()
    : 'DB'

  return (
    <aside className="flex flex-col h-full w-60 bg-card border-r border-border shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-border">
        <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <span className="font-heading font-bold text-primary-foreground text-xs">DB</span>
        </div>
        <span className="font-heading font-semibold text-base tracking-tight text-foreground">
          DailyBrief
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <div className="mb-2">
          <p className="brief-section-heading px-3">Menu</p>
        </div>
        <SidebarNavItem to="/dashboard" icon={Newspaper} label="Brief" end />
        <SidebarNavItem to="/dashboard/stonks" icon={TrendingUp} label="Stonks" />
        <SidebarNavItem to="/dashboard/scroll" icon={Layers} label="Scroll" />
        <SidebarNavItem to="/dashboard/profile" icon={User} label="Profile" />
      </nav>

      {/* User settings */}
      <div className="px-3 py-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-auto py-2.5 px-3 text-muted-foreground hover:text-foreground"
          onClick={onSettingsClick}
        >
          <Avatar className="h-7 w-7 shrink-0">
            <AvatarImage src={user?.user_metadata?.avatar_url} />
            <AvatarFallback className="text-xs">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start text-left min-w-0">
            <span className="text-xs font-medium text-foreground truncate max-w-[130px]">
              {user?.user_metadata?.name || user?.email || 'User'}
            </span>
            <span className="text-[10px] text-muted-foreground">Settings</span>
          </div>
          <Settings className="h-3.5 w-3.5 ml-auto opacity-50 shrink-0" />
        </Button>
      </div>
    </aside>
  )
}
