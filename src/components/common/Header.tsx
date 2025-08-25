import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  // subtitleClassName?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  className = "",
  // subtitleClassName = "",
  description,
}) => {
  return (
    <div data-aos="fade-up" className={`header-wrapper text-2xl ${className} flex flex-col items-center`}>
      <h1 className="text-[#454545] font-medium mb-2">
        {title}
      </h1>
      <p className="text-[64px] mt-3 text-[#13476D] font-bold">{description} <span className={`border-b-4 rounded-br-2xl rounded-bl-2xl border-[#DFB400]`}>{subtitle}</span></p>
    </div>
  );
};

export default Header;