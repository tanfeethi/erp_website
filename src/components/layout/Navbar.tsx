import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import WrapperContainer from '../common/WrapperContainer'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0
      setIsScrolled(window.scrollY > heroHeight - 80)
    }

    if (pathname === '/') {
      handleScroll()
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      setIsScrolled(true)
    }
  }, [pathname])

  return (
    <div
      className={`w-full navbar fixed top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#13476D] text-[#FCFCFC]' : 'bg-transparent text-white'
        }`}
    >
      <WrapperContainer>
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold tracking-wide">
            <Link to="/">
              <img
                src={isScrolled ? '/assets/ERPWhite.png' : '/assets/ErpLoaderLogo.png'}
                alt="JEC ERP"
                className="w-20 transition-all duration-300"
              />
            </Link>
          </div>

          <ul className="menu menu-horizontal gap-8 hidden lg:flex font-medium text-lg">
            <li>
              <Link to="/" className="hover:underline">الرئيسية</Link>
            </li>
            <li>
              <Link to="/systems" className="hover:underline">الأنظمة والحلول</Link>
            </li>
            <li>
              <Link to="/features" className="hover:underline">المميزات</Link>
            </li>
          </ul>

          <div className="flex-none">
            <Link to="/contact-us">
              <button className="btn btn-outline border px-6 py-2 border-white text-white hover:bg-white hover:text-[#13476D] transition rounded-md">
                تواصل معنا
              </button>
            </Link>
          </div>
        </div>
      </WrapperContainer>
    </div>
  )
}

export default Navbar