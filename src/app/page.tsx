import { PageWrapper } from '@/components/layout/page-wrapper'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <PageWrapper>
      <span>Home page</span>

      <div className='flex gap-4'>
        <Button asChild className='flex flex-col items-center gap-4 sm:flex-row'>
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
    </PageWrapper>
  )
}
