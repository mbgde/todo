import React from "react";

interface HeaderProps {
  logo: string;
}

const Header = ({ logo }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{logo}</h1>
    </div>
  );
};

export default Header;
