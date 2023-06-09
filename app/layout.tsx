import NavLink from './nav-link'
import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('teste?')

  return (
    <html lang='en' className='bg-gray-800 text-gray-100'>
      <body>
        <header className='border-b p-4'>
          <nav className='space-x-4'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/dashboard'>Dashboard</NavLink>
          </nav>
        </header>
        <main className='p-4'>{children}</main>
      </body>
    </html>
  )
}
