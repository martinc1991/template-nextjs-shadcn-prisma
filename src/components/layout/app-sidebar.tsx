import { AppLinks } from '@/components/layout/app-links'
import { Logo } from '@/components/layout/logo'
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader } from '@/components/ui/sidebar'
import Link from 'next/link'

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className='items-center justify-center h-16'>
        <Link href='/'>
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AppLinks className='flex-col items-start gap-2' />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
