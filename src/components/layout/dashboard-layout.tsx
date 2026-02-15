import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './sidebar'
import { MobileNav } from './mobile-nav'
import { SettingsModal } from '@/components/settings/settings-modal'
import { useMobile } from '@/hooks/use-mobile'

export function DashboardLayout() {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const isMobile = useMobile()

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      {!isMobile && (
        <Sidebar onSettingsClick={() => setSettingsOpen(true)} />
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        {/* Mobile top bar */}
        {isMobile && (
          <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-card shrink-0">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-[10px]">DB</span>
              </div>
              <span className="font-heading font-semibold text-sm">DailyBrief</span>
            </div>
            <MobileNav onSettingsClick={() => setSettingsOpen(true)} />
          </header>
        )}

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <Outlet />
          </div>
        </main>
      </div>

      <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  )
}
