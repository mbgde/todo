import React from "react";

interface TransparentButtonProps {
  label: string;
  className?: string;
}

const TransparentButton = ({
  label,
  className = "",
}: TransparentButtonProps) => {
  return (
    <button
      className={`hover:bg-iceBlue text-royalBlue rounded-lg ${className}`}
    >
      {label}
    </button>
  );
};

export default TransparentButton;
