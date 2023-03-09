import { Suspense } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import Loading from './loading'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body style={{ maxWidth: '1300px', margin: 'auto' }}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
