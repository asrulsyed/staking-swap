import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { CiWallet } from 'react-icons/ci'

const WalletButton = () => {
  const { publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  return (
    <div
      className={`${publicKey
        ? 'border-textHeader bg-black'
        : 'bg-bgWallet border-borderHeader hover:bg-white'} 
        border rounded-lg cursor-pointer h-[48px] w-[256px] flex items-center justify-center relative group transition-all duration-200 ease-in-out
      `}
    >
      {
        publicKey
          ? (
            <>
              <div className="flex justify-center items-center gap-2">
                <CiWallet size={28} color="white" strokeWidth={1} />
                <span className="text-base text-bgWallet w-[118px] text-center">
                  {publicKey.toBase58().slice(0, 4)}....
                  {publicKey.toBase58().slice(-4)}
                </span>
              </div>
              <div className="w-[256px] absolute left-0 bottom-0 translate-y-full z-20 shadow-lg opacity-100 scale-y-0 origin-top group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-200 ease-in-out">
                <ul className="border-textHeader text-bgWallet flex flex-col gap-3 p-2 mt-2 bg-black rounded-lg border">
                  <li>
                    <button
                      className="w-full py-2 rounded-md transition-colors duration-200 ease-in-out cursor-pointer hover:bg-bgWallet hover:text-black"
                      onClick={() => setVisible(true)}
                    >
                      Change Wallet
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full py-2 rounded-md transition-colors duration-200 ease-in-out cursor-pointer hover:bg-bgWallet hover:text-black"
                      onClick={() => disconnect()}
                    >
                      Disconnect
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )
          : (
            <div onClick={() => setVisible(true)} className="flex justify-center items-center gap-2 cursor-pointer">
              <CiWallet size={28} color="black" strokeWidth={1} />
              <span className="text-base text-black w-[118px] text-center">
                Connect Wallet
              </span>
            </div>
          )
      }
    </div>
  )
}

export default WalletButton