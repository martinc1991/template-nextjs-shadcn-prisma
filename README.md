# Next.js + Shadcn/ui + Prisma Template

A modern, production-ready Next.js template with TypeScript, Tailwind CSS, Shadcn/ui components, Prisma ORM, and PostgreSQL database.

## 🚀 Features

- **Next.js 15** with App Router (SSR)
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Shadcn/ui** for beautiful, accessible components
- **Prisma** for type-safe database operations
- **PostgreSQL** database with Docker
- **Dark/Light mode** support
- **ESLint & Prettier** for code quality
- **Responsive sidebar** layout
- **Auto database migrations** on build

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Docker (for local database)
- Git

## 🛠️ Getting Started

### 1. Clone the template

```bash
git clone <your-repo-url>
cd template-nextjs-shadcn-prisma
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
```

### 4. Start the development server

```bash
pnpm dev
```

This command will:

- Start PostgreSQL database using Docker
- Run database migrations
- Start the Next.js development server

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 🗄️ Database Management

### Available Commands

```bash
# Generate Prisma client
pnpm db:generate

# Create and apply new migration
pnpm db:migrate

# Push schema changes directly (development only)
pnpm db:push

# Reset database and apply all migrations
pnpm db:reset

# Open Prisma Studio (database GUI)
pnpm studio
```

### Database Schema

The template includes a basic `User` model. You can extend it in `prisma/schema.prisma`:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎨 UI Components

### Adding Shadcn/ui Components

To add a component, run the following command:

```bash
pnpm ui:add
```

## 🚀 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables**
   - In your Vercel project settings, add your PostgreSQL connection string as `DATABASE_URL`:
     ```
     DATABASE_URL=your-production-connection-string
     ```

4. **Deploy**
   - Click "Deploy" in the Vercel dashboard.
   - Vercel will automatically run your build and database migrations.

## 📁 Project Structure

```
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── migrations/        # Database migrations
│   └── seed.ts           # Database seeding
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn/ui components
│   │   └── layout/      # Layout components
│   ├── lib/             # Utility functions
│   └── actions/         # Server actions
├── public/              # Static assets
└── docker-compose.yml   # Local database setup
```

## 🔧 Configuration

### Tailwind CSS

Configuration: `tailwind.config.ts`

- Custom colors and themes
- Dark mode support
- Responsive breakpoints

### Prisma

Configuration: `prisma/schema.prisma`

- Database connection
- Model definitions
- Client generation settings

### Next.js

Configuration: `next.config.ts`

- Build optimizations
- Environment variables
- Custom webpack config

## 📚 Useful Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Database

- Any PostgreSQL database service like [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres), [Supabase](https://supabase.com), [PlanetScale](https://planetscale.com) or [Neon](https://neon.com/)

### Deployment Guides

- [Vercel Deployment](https://vercel.com/docs/deployments)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This template is open source and available under the [MIT License](LICENSE).
