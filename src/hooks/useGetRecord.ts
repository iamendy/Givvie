import { useAccount, useContractRead } from "wagmi";
import { ethers } from "ethers";
import connect from "../constants/connect";

const useGetRecord = (currency) => {
  const { address } = useAccount();

  const { data: record, isLoading } = useContractRead({
    //@ts-ignore
    address: connect?.address,
    abi: connect?.abi,
    functionName: "getRecord",
    args: [address, currency?.symbol],
    watch: true,
  });

  return { record, isLoading };
};

export default useGetRecord;
