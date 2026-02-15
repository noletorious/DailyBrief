import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface SidebarNavItemProps {
  to: string
  icon: LucideIcon
  label: string
  end?: boolean
}

export function SidebarNavItem({ to, icon: Icon, label, end }: SidebarNavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn(
          'sidebar-nav-item group',
          isActive && 'active'
        )
      }
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span>{label}</span>
    </NavLink>
  )
}
