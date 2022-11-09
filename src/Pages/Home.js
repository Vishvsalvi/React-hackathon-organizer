import React, { useContext } from "react";
import MarketingCard from "../Components/MarketingCard";
import StatisticCard from "../Components/StatisticCard";
import data from "../Data/MarketingData";
import statisticalData from "../Data/StatisticalData";
import CompetitionCard from "../Components/CompetitionCard";
import Filter from "../Components/Filter";
import { Link } from "react-router-dom";
import { competitionContext } from "../App";

const Home = () => {

  const {competitionArray} = useContext(competitionContext)

  return (
    <div>
      <section className="overflow-hidden bg-[#010101] sm:grid sm:grid-cols-2 font-[poppins]">
        <div className="p-8 md:p-12 lg:px-16 lg:py-52">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white md:text-5xl  ">
              Accelerate AI with Global AI Challenges
            </h2>

            <p className=" text-white md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to='create'
                className="inline-block rounded bg-rose-600 px-12 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 focus:outline-none "
              >
                Create Challenge
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Computer"
          src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          className="h-48 w-[93%] object-cover sm:h-[93%]"
        />
      </section>

      <section className="bg-[#010101] font-[poppins] ">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mt-8 sm:mt-12 ">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {statisticalData.map((element) => {
                const { id, stats, header } = element;
                return <StatisticCard key={id} stats={stats} header={header} />;
              })}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto mb-24 text-center">
            <span className="text-xl font-bold sm:text-4xl ">
              Why participate in{" "}
              <span className="text-rose-600 font-[poppins]">
                AI Challenges?
              </span>{" "}
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {data.map((element) => {
              const { id, header, detail, svg } = element;
              return (
                <MarketingCard
                  header={header}
                  detail={detail}
                  icon={svg}
                  key={id}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#010101] pt-10 font-[poppins] ">
            <div className="text-center text-3xl font-extrabold text-white sm:text-4xl mb-5">
            <h1>Explore <span className="text-rose-600" > Challenges</span> </h1>
            </div>
              <Filter/>
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {/* DISPLAY HERE */}
              {
                competitionArray.map((element, index)=>{
                  const {challenge_name, img, status, start_date, end_date } = element;
                  return <CompetitionCard status={status} start_date={start_date} end_date={end_date} img={img} challenge_name={challenge_name} key={index} />
                })
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
