import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Fragment, useState } from "react";

const paymentOptions = [
  {
    name: "Flutterwave",
  },
  {
    name: "FonBnk",
  },
];

const DepositNaira = () => {
  const [selected, setSelected] = useState(paymentOptions[0]);
  const [isActive, setIsActive] = useState(true);

  const config = {
    public_key: "FLWPUBK_TEST-6cf95a5ea440ce920b79d79ef20a4c8d-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    redirect_url: "/payment-success",
    customer: {
      email: "user@gmail.com",
      phone_number: "07066425471",
      name: "John Doe",
    },
    meta: { address: "12345" },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  //const handleFlutterPayment = useFlutterwave(config);

  // <button
  //   onClick={() => {
  //     handleFlutterPayment({
  //       callback: (response) => {
  //         console.log(response);
  //         closePaymentModal(); // this will close the modal programmatically
  //       },
  //       onClose: () => {},
  //     });
  //   }}
  // >
  //   pay button
  // </button>
  return (
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
          <div className="pt-1 ">
            <span>You will receive 100USDC </span>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="" className="text-base font-medium text-gray-900 ">
          Payment provider
        </label>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left rounded-md border border-gray-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {paymentOptions.map((payment, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={payment?.name}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {payment?.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <button className="bg-yellow hover:bg-yellow/90 text-black inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7">
        Make payment
      </button>
    </div>
  );
};
export default DepositNaira;
