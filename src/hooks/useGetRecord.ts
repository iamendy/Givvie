import { useAccount, useContractRead } from "wagmi";
import connect from "../constants/connect";

const useGetRecord = () => {
  const { address } = useAccount();

  const { data: record } = useContractRead({
    //@ts-ignore
    address: connect?.address,
    abi: connect?.abi,
    functionName: "getRecord",
    args: [address],
    watch: true,
  });

  return record;
};

export default useGetRecord;
