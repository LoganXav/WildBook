import React from "react";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";

const Plans = () => {
  return (
    <>
      <Navbar />
      <section className="border-b py-16 mb-16">
        <div className="flex flex-col w-[80%] gap-16 mx-auto">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl">
              Try Wild Book membership free for 1 month
            </h3>
            <p className="md:text-[14.5px] italic">
              *Note - A dummy debit card will be provided for all your transactions on this site.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="border w-[100%] md:w-[50%] aspect-[3/1.8] text-[14px] md:text-[13px] flex flex-col items-center text-center justify-between py-4 hover:border-[black] transition duration-200 ease">
                <h3 className="font-semibold text-xl">Basic</h3>
                <p><span className="line-through mr-2 text-[#767676]">NGN21,499</span>NGN0 per year after trial ends</p>
                <p className="text-[green]">(save NGN21, 499)</p>
                <button className="bg-[#edb48b] text-[14px] md:text-[13px] rounded-full text-white py-3 px-8">Start free trial</button>
            </div>
            <div className="border w-[100%] md:w-[50%] aspect-[3/1.8] text-[14px] md:text-[13px] flex flex-col items-center text-center justify-between py-4 hover:border-[black] transition duration-200 ease">
                <h3 className="font-semibold text-xl">Premium</h3>
                <p><span className="line-through mr-2 text-[#767676]">NGN39,499</span>NGN0 per year after trial ends</p>
                <p className="text-[green]">(save NGN39, 499)</p>
                <button className="bg-[#edb48b] text-[14px] md:text-[13px] rounded-full text-white py-3 px-8">Start free trial</button>
            </div>
          </div>
          <div className="text-[14.5px] md:max-w-[70%] flex flex-col gap-4">
            <p>Your Wild book membership plan will be billed in your local currency, using exchange rates set by Google.</p>
            <p>Your payments will be processed by stripe within 24 hours of the end of the current billing cycle</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Plans;
