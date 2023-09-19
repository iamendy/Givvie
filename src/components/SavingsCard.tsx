import { ethers } from "ethers";
import useGetBalance from "../hooks/useGetBalance";
import useGetRecord from "../hooks/useGetRecord";
import { useCountdown } from "../hooks/useCountdown";
import { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import connect from "../constants/connect";
import Loader from "./icons/Loader";

const SavingsCard = () => {
  const balance = useGetBalance("usdc");
  const record = useGetRecord();

  const [isOpen, setIsOpen] = useState(false);

  const { days, hours, minutes, seconds, isCountdownCompleted } = useCountdown(
    parseInt(record?.expiresAt)
  );

  const { config, refetch } = usePrepareContractWrite({
    address: connect?.address,
    abi: connect?.abi,
    functionName: "breakPiggy",
  });

  const {
    write: breakPiggy,
    data,
    isLoading: isBreaking,
  } = useContractWrite(config);

  const { isLoading: isWaitingTx } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(tx) {
      //disable modal
      setIsOpen(false);
    },
  });

  const handleBreak = async () => {
    await refetch();
    breakPiggy?.();
  };

  return (
    <div className="relative bg-gray/5 rounded-lg p-8 w-full overflow-hidden">
      {record?.status > 0 && (
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute text-center top-0 right-0 w-full h-full bg-base-100 text-white p-4  flex-col justify-between`}
        >
          <h3 className="font-semibold text-xl">
            {isCountdownCompleted
              ? "Great Job Saving! 🌦️"
              : "You can do better! 🎳"}
          </h3>
          <p className="">
            {isCountdownCompleted
              ? "Earn 20RTK when you break your piggy!"
              : "You will be charged 5% penalty if you break before duration"}
          </p>

          <div className="flex gap-x-2 items-center justify-between mt-2">
            <button
              onClick={() => handleBreak()}
              className="bg-yellow text-black px-3.5 py-2.5 rounded-sm w-full inline-flex justify-center items-center"
            >
              {isBreaking ? (
                <Loader alt />
              ) : isWaitingTx ? (
                <Loader alt />
              ) : (
                "proceed"
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="border-white  text-white px-3.5 py-2.5rounded-sm w-full inline-flex justify-center items-center"
            >
              cancel
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">
              {Math.floor(ethers?.formatEther(record?.balance || "0") * 100) /
                100}{" "}
              USDC
            </p>
            <span className="">Locked</span>
          </div>

          <div className="text-right">
            <p className="text-xl font-semibold">
              {Math.floor(ethers?.formatEther(balance || "0") * 100) / 100} USDC
            </p>
            <span className="">Bal</span>
          </div>
        </div>
        {record?.status > 0 && (
          <>
            <div className="font-mono text-xl text-center">
              {isCountdownCompleted ? (
                <p>Savings goal achieved!</p>
              ) : (
                <>
                  <p className="text-xs">Locked until</p>
                  <p>
                    {days}:{hours}:{minutes}:{seconds}
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className={`${
                isCountdownCompleted
                  ? "bg-green-700 hover:bg-green-700/90 active:bg-green-700"
                  : "bg-red-400 hover:bg-red-500"
              }  text-white inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7`}
            >
              Break Piggy
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default SavingsCard;
