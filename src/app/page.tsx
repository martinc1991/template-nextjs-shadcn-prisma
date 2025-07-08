import { getUsers } from '@/actions/get-users'
import { PageWrapper } from '@/components/layout/page-wrapper'

export default async function Home() {
  const users = await getUsers()

  return (
    <PageWrapper>
      <span>Home page</span>

      <div className='mt-4 flex flex-col gap-4'>
        {users.map((user) => (
          <span key={user.email}>{user.email}</span>
        ))}
      </div>
    </PageWrapper>
  )
}
