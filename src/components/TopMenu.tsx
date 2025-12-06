'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Collapse } from 'react-bootstrap'

type OpenType = {
  isOpen?: boolean
  menuCenter?: boolean
}

const TopMenu = ({ isOpen, menuCenter }: OpenType) => {
  const pathname = usePathname()
  const isActive = (url: any) => pathname === url

  return (
    <Collapse in={isOpen} className="navbar-collapse">
      <ul className={`navbar-nav navbar-nav-scroll ${menuCenter ? 'mx-auto' : 'ms-auto'}`}>
        <li className="nav-item">
          <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} href="/">
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#services">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#about">
            À propos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </Collapse>
  )
}

export default TopMenu
