import SaveBox from "../components/SaveBox";
import SavingsGraph from "../components/SavingsGraph";
import Fire from "../components/icons/Fire";

const Dashboard = () => {
  return (
    <section className="p-6 2xl:px-24 gap-x-9 flex justify-between mx-auto">
      <SaveBox />

      <main className="w-[70%] ">
        <div className=" justify-end mb-6 hidden">
          <div className="flex">6.45</div>
        </div>

        <div className="flex gap-x-8 items-cente">
          <div className=" bg-gray/5 rounded-lg p-8 w-full">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-semibold">250USDC</p>
                  <span className="">Locked</span>
                </div>

                <div className="text-right">
                  <p className="text-xl font-semibold">550USDC</p>
                  <span className="">Bal</span>
                </div>
              </div>

              <div className="font-mono text-xl text-center">00:30:30</div>

              <button className="bg-green-700 hover:bg-green-700/90 active:bg-green-700 text-white inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7">
                Break Piggy
              </button>
            </div>
          </div>

          <div className=" bg-gray/5 rounded-lg p-8 w-full text-right">
            <p className="text-xl font-semibold">250GIVV</p>
            <span className="flex justify-end">
              <Fire />
              Earned
            </span>
          </div>
        </div>

        <SavingsGraph />
      </main>
    </section>
  );
};
export default Dashboard;
