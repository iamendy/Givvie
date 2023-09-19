import { useEffect, useState } from "react";
import currencies from "../constants/currencies";
import SavingsCard from "./SavingsCard";

import axios from "axios";
import { useAccount, useContractRead } from "wagmi";
import removeEmail from "../helpers/removeEmail";
import connect from "../constants/connect";
import { ethers } from "ethers";
import SavingsGraph from "./SavingsGraph";
import RewardCard from "./RewardCard";

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
        <SavingsCard />

        <RewardCard />
      </div>

      <SavingsGraph />
    </main>
  );
};
export default ActivityBox;
