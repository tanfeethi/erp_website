import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import WrapperContainer from "../common/WrapperContainer";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > heroHeight - 80);
    };

    if (pathname === "/") {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const navbarBgClass =
    isMobile || isScrolled
      ? "bg-[#13476D] text-[#FCFCFC]"
      : "bg-transparent text-white";

  return (
    <div
      className={`w-full navbar fixed top-0 z-50 transition-colors duration-300 ${navbarBgClass}`}
    >
      <WrapperContainer>
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold tracking-wide">
            <Link to="/">
              <img
                src={
                  isMobile || isScrolled
                    ? "/assets/ERPWhite.webp"
                    : "/assets/ErpLoaderLogo.webp"
                }
                alt="JEC ERP"
                className="w-20 transition-all duration-300"
              />
            </Link>
          </div>

          <ul className="menu menu-horizontal gap-8 hidden lg:flex font-medium text-lg">
            <li>
              <Link to="/" className="hover:underline">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/systems" className="hover:underline">
                الأنظمة والحلول
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:underline">
                المميزات
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Link to="/contact-us">
              <button className="btn btn-outline border px-6 py-2 border-white text-white hover:bg-white hover:text-[#13476D] transition rounded-md hidden lg:inline-block cursor-pointer">
                تواصل معنا
              </button>
            </Link>

            <button
              className="lg:hidden text-2xl focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden px-6 pb-4 text-sm font-medium bg-[#13476D] text-white transition-all duration-300">
            <ul className="space-y-3 mt-4">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/systems" onClick={() => setIsMobileMenuOpen(false)}>
                  الأنظمة والحلول
                </Link>
              </li>
              <li>
                <Link to="/features" onClick={() => setIsMobileMenuOpen(false)}>
                  المميزات
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
        )}
      </WrapperContainer>
    </div>
  );
};

export default Navbar;
