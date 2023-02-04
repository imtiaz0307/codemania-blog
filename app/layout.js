import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{ maxWidth: '1300px', margin: 'auto' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
