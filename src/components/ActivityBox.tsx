import { useEffect, useState } from "react";
import currencies from "../constants/currencies";
import SavingsCard from "./SavingsCard";
import Fire from "./icons/Fire";
import axios from "axios";
import { useAccount, useContractRead } from "wagmi";
import removeEmail from "../helpers/removeEmail";
import connect from "../constants/connect";
import { ethers } from "ethers";
import SavingsGraph from "./SavingsGraph";

const ActivityBox = () => {
  // const { address } = useAccount();
  // const [user, setUser] = useState("");

  // const getUser = () => {
  //   axios
  //     .get(`/api/get-user?address=${address}`)
  //     .then(({ data }) => setUser(removeEmail(data?.email)))
  //     .catch((e) => console.log(e));
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  // const { data: tokenBalance } = useContractRead({
  //   address: connect?.token.address,
  //   abi: connect?.token?.abi,
  //   functionName: "balanceOf",
  //   args: [address],
  //   watch: true,
  // });

  return (
    <main className="w-[70%] ">
      <div className=" justify-end mb-6 hidden">
        <div className="flex">6.45</div>
      </div>

      <div className="flex gap-x-8 items-cente">
        <div className=" bg-gray/5 rounded-lg p-8 w-full">
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">250USDC</p>
                <span className="">Locked</span>
              </div>

              <div className="text-right">
                <p className="text-xl font-semibold">550USDC</p>
                <span className="">Bal</span>
              </div>
            </div>

            <div className="font-mono text-xl text-center">00:30:30</div>

            <button className="bg-green-700 hover:bg-green-700/90 active:bg-green-700 text-white inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7">
              Break Piggy
            </button>
          </div>
        </div>

        <div className=" bg-gray/5 rounded-lg p-8 w-full text-right">
          <p className="text-xl font-semibold">250GIVV</p>
          <span className="flex justify-end">
            <Fire />
            Earned
          </span>
        </div>
      </div>

      <SavingsGraph />
    </main>
  );
};
export default ActivityBox;
