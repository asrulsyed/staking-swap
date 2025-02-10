'use client'

import WalletButton from "@/components/WalletButton";
import { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('DIPHIGH');
  const [sellAmount, setSellAmount] = useState(5);
  const [buyAmount, setBuyAmount] = useState(5);
  const [tolerance, setTolerance] = useState(0.1);

  const handleSwap = () => {
    console.log("Swap")
  }

  return (
    <main className="flex flex-col items-center mt-[70px] font-display -z-10 mb-[95px]">
      <div className="flex flex-col gap-10 mt-[76px] max-w-[1134px] w-full px-10">
        <div className="flex justify-between items-center">
          <p className="leading-[56px] text-2xl font-medium text-white">Swap</p>
          <div className="flex items-center gap-4">
            <span className="text-textMain text-xl font-normal">Network</span>
            <div className="relative w-[225px]">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-textWhiteButton border border-borderHeader h-[48px] rounded-lg px-5 text-base font-semibold text-textFooterTitle cursor-pointer flex items-center justify-between"
              >
                {selectedOption}
                <FaChevronDown size={20} color="white" className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </div>

              {isOpen && (
                <div className="absolute w-full mt-1 overflow-hidden border rounded-lg bg-textWhiteButton border-borderHeader z-[51]">
                  {['DIPHIGH'].map((option, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedOption(option);
                        setIsOpen(false);
                      }}
                      className="text-textFooterTitle px-5 py-3 font-semibold transition-colors cursor-pointer hover:bg-borderHeader"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-bgHeader border-textHeader rounded-2xl border px-[58px] py-[67px] flex flex-col gap-[63px] items-stretch">
          <WalletButton />
          <div className="grid lg:grid-cols-2 gap-x-[60px] gap-y-10 text-textMain relative">
            <FaArrowRight size={24} color="white" className="-translate-x-1/2 absolute bottom-1/2 left-1/2 translate-y-[calc(50%-44px)]" />
            <div className="flex flex-col gap-4">
              <p className="text-lg">Sell</p>
              <div className="">
                <input
                  value={sellAmount}
                  onChange={(e) => setSellAmount(parseFloat(e.target.value))}
                  className="border-borderHeader text-bgWallet h-[48px] w-[250px] overflow-hidden px-4 text-base font-semibold bg-black rounded-lg border focus:outline-none"
                />
                
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg">Buy</p>
              <div className="">
              <input
                  value={buyAmount}
                  onChange={(e) => setBuyAmount(parseFloat(e.target.value))}
                  className="border-borderHeader text-bgWallet h-[48px] w-[250px] overflow-hidden px-4 text-base font-semibold bg-black rounded-lg border focus:outline-none"
                />
              
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg">Slippage Tolerance</p>
              <div className="flex justify-between gap-2">
                <button
                  className={`border-borderHeader rounded-lg border flex-shrink-0 w-[100px] h-[48px] text-base font-semibold transition-colors duration-200 ease-in-out ${tolerance === 0.1
                    ? 'bg-bgWallet text-black'
                    : 'bg-black text-bgWallet hover:bg-bgWallet hover:text-black'
                    }`}
                  onClick={() => setTolerance(0.1)}
                >
                  0.1 %
                </button>
                <button
                  className={`border-borderHeader rounded-lg border flex-shrink-0 w-[100px] h-[48px] text-base font-semibold transition-colors duration-200 ease-in-out ${tolerance === 0.5
                    ? 'bg-bgWallet text-black'
                    : 'bg-black text-bgWallet hover:bg-bgWallet hover:text-black'
                    }`}
                  onClick={() => setTolerance(0.5)}
                >
                  0.5 %
                </button>
                <button
                  className={`border-borderHeader rounded-lg border flex-shrink-0 w-[100px] h-[48px] text-base font-semibold transition-colors duration-200 ease-in-out ${tolerance === 1
                    ? 'bg-bgWallet text-black'
                    : 'bg-black text-bgWallet hover:bg-bgWallet hover:text-black'
                    }`}
                  onClick={() => setTolerance(1)}
                >
                  1.0 %
                </button>
                <div className="relative">
                  <input
                    value={tolerance}
                    onChange={(e) => setTolerance(parseFloat(e.target.value))}
                    className="border-borderHeader text-bgWallet w-full h-full overflow-hidden px-4 text-base font-semibold bg-black rounded-lg border focus:outline-none"
                    placeholder="Custom"
                  />
                  <span className="-translate-y-1/2 text-bgWallet absolute right-3 top-1/2 pl-1 bg-black">%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <button
                className="w-full border-borderHeader bg-bgWallet rounded-lg border h-[48px] text-base font-semibold text-black transition-colors duration-200 ease-in-out hover:bg-white"
                onClick={() => handleSwap()}
              >
                Swap
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
