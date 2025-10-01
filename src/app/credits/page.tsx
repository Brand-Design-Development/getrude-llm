export default function CreditsPage() {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl font-bold text-[#0096d6]">
        Purchase Credits
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded border-t-4 border-[#0096d6] bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Starter</h2>
          <p>100 credits</p>
          <p className="my-2 text-2xl font-bold">$10</p>
          <button
            className="mt-2 w-full rounded bg-[#0096d6] py-2 text-white"
            disabled
          >
            Buy
          </button>
        </div>
        <div className="rounded border-t-4 border-[#0096d6] bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Pro</h2>
          <p>500 credits</p>
          <p className="my-2 text-2xl font-bold">$40</p>
          <button
            className="mt-2 w-full rounded bg-[#0096d6] py-2 text-white"
            disabled
          >
            Buy
          </button>
        </div>
        <div className="rounded border-t-4 border-[#0096d6] bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Enterprise</h2>
          <p>2000 credits</p>
          <p className="my-2 text-2xl font-bold">$120</p>
          <button
            className="mt-2 w-full rounded bg-[#0096d6] py-2 text-white"
            disabled
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
