import React from 'react'
import Head from 'next/head'
import Navbar from '../navbar/Navbar'
import { navLinks } from '../../data/navData'
import GlobalStyle from '../../globalStyle'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

export default function Container ({ children, title }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <React.Fragment>
      <Head>
        <title>Policonsultorio Saez Peña - {title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      <Navbar toggle={toggle} navLinks={navLinks} />
      <Sidebar isOpen={isOpen} toggle={toggle} navLinks={navLinks}/>
      {children}
      <Footer />
    </React.Fragment>
  )
}
