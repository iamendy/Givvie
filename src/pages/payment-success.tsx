import { useRouter } from "next/router";
import Loader from "../components/icons/Loader";
import { useEffect } from "react";
import axios from "axios";

const PaymentSuccess = () => {
  const router = useRouter();

  console.log(router?.query);

  const sendTokens = async () => {
    axios
      .post("/api/handle-token")
      .then((data) => {
        console.log(data);
        router.push("/dashboard");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    sendTokens();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p>Processing</p>
      <Loader />
    </div>
  );
};
export default PaymentSuccess;
