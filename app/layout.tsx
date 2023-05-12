import NavLink from './nav-link'

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
    <html lang='en'>
      <body>
        <nav>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/dashboard'>Dashboard</NavLink>
        </nav>
        {children}
      </body>
    </html>
  )
}
