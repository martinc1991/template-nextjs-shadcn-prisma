import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users = [
  'alice@prisma.io',
  'bob@prisma.io',
  'charlie@prisma.io',
  'dave@prisma.io',
  'eve@prisma.io',
  'frank@prisma.io',
  'grace@prisma.io',
]

async function main() {
  console.log('Seeding users...')

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user },
      update: {},
      create: {
        email: user,
      },
    })
  }

  console.log('Users seeded successfully')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
