import React from "react";

interface BaseButtonProps {
  label: string;
  className?: string;
}

const BaseButton = ({ label, className = "" }: BaseButtonProps) => {
  return (
    <button
      className={`bg-royalBlue rounded-lg py-[1px] text-white ${className}`}
    >
      {label}
    </button>
  );
};

export default BaseButton;
