import React from "react";

interface BaseButtonProps {
  label: string;
}

const BaseButton = ({ label }: BaseButtonProps) => {
  return (
    <button className="bg-royalBlue w-full rounded-lg py-[1px] text-white">
      {label}
    </button>
  );
};

export default BaseButton;
