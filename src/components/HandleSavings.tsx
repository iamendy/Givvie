import { useState } from "react";
import { useContractRead, useAccount } from "wagmi";
import connect from "../constants/connect";
import NewPiggy from "./NewPiggy";
import UpdatePiggy from "./UpdatePiggy";

const HandleSavings = () => {
  const { address } = useAccount();

  const { data: isActive } = useContractRead({
    //@ts-ignore
    address: connect?.address,
    abi: connect?.abi,
    functionName: "isActive",
    args: [address],
    watch: true,
  });

  return <>{isActive ? <UpdatePiggy /> : <NewPiggy />}</>;
};

export default HandleSavings;
