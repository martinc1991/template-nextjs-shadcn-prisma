import React from 'react'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper(props: PageWrapperProps) {
  return <div className='flex flex-col items-center'>{props.children}</div>
}
