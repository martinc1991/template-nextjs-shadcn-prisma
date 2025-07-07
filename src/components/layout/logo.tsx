import Image from 'next/image'

export function Logo() {
  return <Image className='dark:invert' src='/next.svg' alt='Next.js logo' width={90} height={19} priority />
}
