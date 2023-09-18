import { Listbox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import currencies from "../constants/currencies";
import UpdatePiggy from "./UpdatePiggy";
import NewPiggy from "./NewPiggy";
import { useAccount } from "wagmi";

const SaveBox = () => {
  const [isActive, setIsActive] = useState(false);
  const { address } = useAccount();

  // const { data: isActive, isLoading } = useContractRead({
  //   //@ts-ignore
  //   address: connect?.address,
  //   abi: connect?.abi,
  //   functionName: "isActive",
  //   args: [address, selected?.symbol],
  //   watch: true,
  // });

  return (
    <aside className="lg:w-[30%] p-4">
      <h3 className="font-semibold">Start your Savings Journey</h3>
      <form className="mt-4 ">
        <div className="space-y-5">
          {isActive ? <UpdatePiggy /> : <NewPiggy />}
        </div>
      </form>
    </aside>
  );
};
export default SaveBox;
