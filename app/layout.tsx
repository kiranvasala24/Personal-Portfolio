import CustomCursor from '@/components/CustomCursor'
import { ThemeProvider } from '@/contexts/ThemeContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Kirankumar Vasala - Full-Stack Developer',
  description: 'Portfolio of Kirankumar Vasala - Full-Stack Developer specializing in React, Next.js, and AI integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/kv.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.variable}>
        <CustomCursor />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}


