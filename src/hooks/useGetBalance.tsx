import { useAccount, useContractRead } from "wagmi";
import { ethers } from "ethers";
import connect from "../constants/connect";

const useGetBalance = (currency: string) => {
  const { address } = useAccount();

  const { data: balance } = useContractRead({
    //@ts-ignore
    address: connect?.[currency]?.address,
    abi: connect?.[currency]?.abi,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  return balance;
};

export default useGetBalance;
