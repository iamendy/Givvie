import { useAccount, useContractRead } from "wagmi";
import { ethers } from "ethers";

const useGetBalance = (currency) => {
  const { address } = useAccount();

  const { data: balance, isLoading } = useContractRead({
    //@ts-ignore
    address: currency?.address,
    abi: currency?.abi,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  return { balance, isLoading };
};

export default useGetBalance;
