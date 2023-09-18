import { useState } from "react";

const HandleSavings = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive ? (
        <div className="flex flex-col gap-y-5 py-4">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              Amount
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="50"
              ></input>
            </div>
          </div>

          <button className="bg-yellow hover:bg-yellow/90 text-black inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7">
            Update Piggy
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-5 py-4">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              Amount
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="50"
              ></input>
            </div>
          </div>

          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              Duration
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Days"
              ></input>
            </div>
          </div>

          <button className="bg-yellow hover:bg-yellow/90 text-black inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7">
            Update Piggy
          </button>
        </div>
      )}
    </>
  );
};

export default HandleSavings;
