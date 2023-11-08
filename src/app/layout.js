import Navigation from './components/Navigation'
import { Inter } from 'next/font/google'
import { Body } from './components/Styled'
const inter = Inter({ subsets: ['latin'] })
import './globals.css'

export const metadata = {
  title: 'KryptoIQ',
  description: 'Learn, Play & Earn',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Body className={inter.className}>
        <Navigation />
        {children}
      </Body>
    </html>
  )
}
