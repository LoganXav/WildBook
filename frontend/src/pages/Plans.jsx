import React, { useContext, useEffect } from "react";
import { Navbar } from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer";
import Skeleton from "../components/Skeleton";
import { useFetch } from "../hooks/useFetch";
import { makeRequest } from "../makeRequest";
import { AuthContext } from "../context/authContext";

const Plans = () => {
  const { data, loading, error } = useFetch(
    import.meta.env.VITE_APP_API_URL + "/plans/prices"
  );
  const { userPlan, sub } = useContext(AuthContext);

  useEffect(() => {
    const fetchPlan = async () => {
      await userPlan()
    }
    fetchPlan()
  }, [])


  const createSession = async (planId) => {
    const { data: response } = await makeRequest.post(
      import.meta.env.VITE_APP_API_URL + "/plans/session",
      {
        planId,
      },
      { withCredentials: true }
    );
    
    window.location.href = response.url;
  };

  return (
    <>
      <Navbar />
      <section className="border-b py-16 mb-16">
        <div className="flex flex-col w-[80%] gap-16 mx-auto">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl">
              {sub === "Basic" ? "Upgrade to Premium membership" : sub === "Premium" ? "You are now a Premium member of The Wild Book!" : "Try Wild Book's membership free for 1 month"}
            </h3>
            <p className="italic">
              *Note - A dummy debit card will be provided for all your
              transactions on this site.
            </p>
          </div>
          {sub === "Premium" ? <div></div> : sub === "Premium" ? <div
                    
                      className="border w-[100%] md:w-[50%] aspect-[3/1.8] text-[14px] flex flex-col items-center text-center justify-between p-4 hover:border-[#edb48b] transition duration-200 ease"
                    >
                      <h3 className="font-semibold text-xl">Premium</h3>
                      <p>
                        <span className="line-through mr-2 text-[#767676] italic">
                          NGN3000
                        </span>
                        NGN2500 per month
                      </p>
                      <p className="text-[#53cd53] italic">
                        (save NGN500)
                      </p>
                      <button
                        onClick={() => createSession(plan.id)}
                        className="bg-[#edb48b] text-[14px] rounded-full text-white py-3 px-8"
                      >
                        Upgrade to Premium
                      </button>
                    </div>  : <div className="flex flex-col md:flex-row gap-4">
            {loading
              ? <Skeleton type="plan"/>
              : error
              ? "Couldn't reach server!"
              : data.map((plan, i) => (
                  
                    <div
                      key={i}
                      className="border w-[100%] md:w-[50%] aspect-[3/1.8] text-[14px] flex flex-col items-center text-center justify-between p-4 hover:border-[#edb48b] transition duration-200 ease"
                    >
                      <h3 className="font-semibold text-xl">{plan.nickname}</h3>
                      <p>
                        <span className="line-through mr-2 text-[#767676] italic">
                          NGN{0.012 * plan.unit_amount}
                        </span>
                        NGN{plan.unit_amount / 100} per month
                      </p>
                      <p className="text-[#53cd53] italic">
                        ( save NGN{0.002 * plan.unit_amount} )
                      </p>
                      <button
                        onClick={() => createSession(plan.id)}
                        className="bg-[#edb48b] text-[14px] rounded-full text-white py-3 px-8"
                      >
                        Start free trial
                      </button>
                    </div>
                  
                ))}
          </div>}
          <div className="md:max-w-[70%] flex flex-col gap-4">
            <p>
              Your Wild book membership plan will be billed in your local
              currency, using exchange rates set by Google.
            </p>
            <p>
              Your payments will be processed by stripe within 24 hours of the
              end of the current billing cycle
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Plans;
