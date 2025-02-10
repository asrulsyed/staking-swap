<div className="flex justify-between gap-2">
  <button
    className={`border-borderHeader rounded-lg border w-[100px] h-[48px] text-base font-semibold transition-colors duration-200 ease-in-out ${
      tolerance === 0.1 
        ? 'bg-bgWallet text-black' 
        : 'bg-black text-bgWallet hover:bg-bgWallet hover:text-black'
    }`}
    onClick={() => setTolerance(0.1)}
  >
    0.1%
  </button>
  <button
    className={`border-borderHeader rounded-lg border w-[100px] h-[48px] text-base font-semibold transition-colors duration-200 ease-in-out ${
      tolerance === 0.5
        ? 'bg-bgWallet text-black'
        : 'bg-black text-bgWallet hover:bg-bgWallet hover:text-black'
    }`}
    onClick={() => setTolerance(0.5)}
  >
    0.5%
  </button>
  <button
    className={`border-borderHeader rounded-lg border w-[100px] h-[48px] text-base font-semibold transition-colors duration-200 ease-in-out ${
      tolerance === 1
        ? 'bg-bgWallet text-black'
        : 'bg-black text-bgWallet hover:bg-bgWallet hover:text-black'
    }`}
    onClick={() => setTolerance(1)}
  >
    1.0%
  </button>
  <input
    type="number"
    min="0.1"
    max="100"
    step="0.1"
    value={tolerance}
    className="w-[100px] h-[48px] bg-black text-bgWallet border border-borderHeader rounded-lg px-3 text-center"
    onChange={(e) => setTolerance(parseFloat(e.target.value))}
  />
</div>
