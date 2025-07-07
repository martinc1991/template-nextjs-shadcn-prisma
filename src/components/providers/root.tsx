import { ThemeProvider } from '@/components/theme-provider'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

interface RootProviderProps {
  children: React.ReactNode
}

export function RootProvider(props: RootProviderProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <SidebarProvider defaultOpen={false}>{props.children}</SidebarProvider>
    </ThemeProvider>
  )
}
