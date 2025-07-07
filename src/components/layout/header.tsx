'use client'

import { AppLinks } from '@/components/layout/app-links'
import { Logo } from '@/components/layout/logo'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { HEADER_HEIGHT } from '@/config/layout'
import { useIsMobile } from '@/hooks/use-mobile'
import Link from 'next/link'

export default function Header() {
  const isMobile = useIsMobile()

  return (
    <div className='sticky top-0 z-50 flex items-center justify-between px-2' style={{ height: HEADER_HEIGHT }}>
      <div className='flex items-center gap-6 flex-1'>
        <Link href='/'>
          <Logo />
        </Link>
        {!isMobile && <AppLinks />}
      </div>
      {isMobile && <SidebarTrigger />}
    </div>
  )
}
