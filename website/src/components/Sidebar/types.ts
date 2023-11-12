import type { Url } from 'next/dist/shared/lib/router/router'

export interface MenuItem {
  name: string
  href: Url
  children?: {
    name: string
    href: string
  }[]
}

export interface SidebarProps {
  links: MenuItem[]
}