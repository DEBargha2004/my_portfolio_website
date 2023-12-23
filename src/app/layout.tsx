import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/other/theme-provider'
import Navbar from '@/components/custom/Navbar'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin', 'latin'] })

export const metadata: Metadata = {
  title: 'Debargha Saha',
  description: 'A Developer'
  // icons: {
  //   icon: ['../../public/me.png']
  // }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cn('px-5 py-5', inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
