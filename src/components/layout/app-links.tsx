import { Button } from '@/components/ui/button'
import { menuLinks } from '@/config/app-links'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface MenuLinksProps {
  className?: string
}

export function AppLinks(props: MenuLinksProps) {
  return (
    <nav className={cn('flex items-center', props.className)}>
      {menuLinks.map((link) => (
        <Button key={link.href} asChild variant='link'>
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </nav>
  )
}
