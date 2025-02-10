import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Image from "next/image";

const networks = [
  { id: 'solana', name: 'Solana' },
];

const swap = [
  { id: 'SOL', name: 'SOL' },
  { id: 'USDT', name: 'USDT' },
  { id: 'USDC', name: 'USDC' },
  { id: 'DIPHIGH', name: 'DIPHIGH' },
]

const TokenSelector = ({ type, selectedToken, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[180px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-textWhiteButton border-borderHeader w-full h-12 flex justify-between items-center px-5 rounded-lg border hover:bg-opacity-90"
      >
        <div className="flex items-center gap-2">
          <Image
            src={`/${selectedToken}.png`}
            alt={`${selectedToken}`}
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-textMain text-base font-semibold tracking-wide">{selectedToken}</span>
        </div>
        <FaChevronDown size={20} color="white" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="border-borderHeader w-full absolute z-50 mt-1 bg-black rounded-lg border">
          {type === 'networks' ? networks.map(({ name }) => (
            <button
              key={name}
              onClick={() => {
                onSelect(name);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2 px-5 py-3 hover:bg-borderHeader hover:rounded-lg"
            >
              <Image
                src={`/${name}.png`}
                alt={`${name}`}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-textFooterTitle font-semibold">{name}</span>
            </button>
          )) : swap.map(({ name }) => (
            <button
              key={name}
              onClick={() => {
                onSelect(name);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2 px-5 py-3 hover:bg-borderHeader hover:rounded-lg"
            >
              <Image
                src={`/${name}.png`}
                alt={`${name}`}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-textFooterTitle font-semibold">{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default TokenSelector