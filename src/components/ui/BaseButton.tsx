import React from "react";

interface BaseButtonProps {
  label: string;
  className?: string;
}

const BaseButton = ({ label, className = "" }: BaseButtonProps) => {
  return (
    <button className={`bg-royalBlue rounded-lg text-white ${className}`}>
      {label}
    </button>
  );
};

export default BaseButton;
