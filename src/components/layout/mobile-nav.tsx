import { useState } from 'react'
import { Menu, Newspaper, TrendingUp, Layers, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { SidebarNavItem } from './sidebar-nav-item'

interface MobileNavProps {
  onSettingsClick: () => void
}

export function MobileNav({ onSettingsClick }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-72 pt-12">
          <SheetHeader className="mb-6">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-xs">DB</span>
              </div>
              <SheetTitle>DailyBrief</SheetTitle>
            </div>
          </SheetHeader>
          <nav className="space-y-0.5" onClick={() => setOpen(false)}>
            <SidebarNavItem to="/dashboard" icon={Newspaper} label="Brief" end />
            <SidebarNavItem to="/dashboard/stonks" icon={TrendingUp} label="Stonks" />
            <SidebarNavItem to="/dashboard/scroll" icon={Layers} label="Scroll" />
            <SidebarNavItem to="/dashboard/profile" icon={User} label="Profile" />
          </nav>
          <div className="absolute bottom-6 left-6 right-6">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => { setOpen(false); onSettingsClick() }}
            >
              Settings
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
