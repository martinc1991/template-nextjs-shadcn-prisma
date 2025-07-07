import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>

      <div className='flex gap-4'>
        <Button asChild className='flex gap-4 items-center flex-col sm:flex-row'>
          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Deploy now
          </a>
        </Button>
        <Button asChild>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read our docs
          </a>
        </Button>
      </div>
    </div>
  )
}
