// components/UtilityBox.tsx

import React, { useState } from "react";

interface UtilityBoxProps {
  title: string;
  placeholder: string;
  buttonText: string;
}

const UtilityComp: React.FC<UtilityBoxProps> = ({
  title,
  placeholder,
  buttonText,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-xl w-full utility-box">
      <h2 className="mb-4 font-bold text-2xl text-center">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor={title} className="block font-medium text-sm">
          Enter Solana Token Address:
        </label>
        <input
          type="text"
          id={title}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          required
          className="px-4 py-2 border rounded-md w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md w-full text-white transition"
        >
          {buttonText}
        </button>
      </form>
      {result && (
        <div className="bg-gray-100 mt-4 p-3 rounded-md text-gray-700 text-sm result">
          {result}
        </div>
      )}
    </div>
  );
};

export default UtilityComp;
