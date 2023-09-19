import { useRouter } from "next/router";
import Loader from "../components/icons/Loader";
import { useEffect } from "react";
import axios from "axios";

const PaymentSuccess = () => {
  const router = useRouter();

  const sendTokens = async () => {
    const { tx_ref } = router?.query;

    if (tx_ref !== undefined) {
      axios
        .post("/api/handle-token", { tx_ref })
        .then(({ data }) => {
          //todo: set notification
          console.log(data);
          router.push("/dashboard");
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    sendTokens();
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p>Processing Payment..</p>
      <Loader />
    </div>
  );
};
export default PaymentSuccess;
