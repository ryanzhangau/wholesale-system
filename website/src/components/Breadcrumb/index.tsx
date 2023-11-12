'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { BreadcrumbProps } from './types'
import { useMemo } from 'react'

export default function Breadcrumb ({ prefix }: BreadcrumbProps) {
  const pathname = usePathname()
  console.log(pathname)
  const segment = useMemo(() => {
    return pathname.split('/').filter(part => part !== '')
  }, [ pathname ])

  return <div>
    {
      segment.map(s => s !== segment[ segment.length - 1 ] ? <Link key={s} href={ '' }>{ s }</Link> : <span key={s}>{ s }</span>)
    }

  </div>

}