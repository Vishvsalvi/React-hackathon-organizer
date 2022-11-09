import React, { useState } from "react";
import { Link } from "react-router-dom";

const CompetitionCard = ({ challenge_name, img, status, start_date, end_date }) => {

  const countDate = new Date(start_date).getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

  const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap/day); 
    const texthour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);

    const endDate = new Date(end_date).getDate()
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const endMonth = month[new Date(end_date).getMonth()]

    const countEnd = new Date(end_date).getTime()
    const endGap = countEnd - now;
    const endDay = Math.floor(endGap/day);
    const endHour = Math.floor((endGap % day) / hour);
    const endMin = Math.floor((endGap % hour) / minute);
    
  let setContestStatus = ""
  


  // Upcoming challenges
  if(status === "upcoming"){
    setContestStatus="text-white text-xs font-thin mb-2 px-3 py-1 bg-emerald-500 rounded-md capitalize"
   return (
    <div>
    <Link to={`competition/${challenge_name}`} >
    <div className="flex justify-center hover:cursor-pointer transition-transform duration-500 transform ease-in-out hover:scale-105">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-t-lg " src={img} alt="" />
        <div className="py-8 px-20 text-center">
          <span className={setContestStatus}>
            {status}
          </span>
          <h5 className="text-gray-900 text-md font-semibold mb-2 mt-4 capitalize">
            {challenge_name}
          </h5>

          {
           
          }
          <h5 className="text-gray-900 text-sm font-medium ">Starts in:</h5>
          <h5 className="text-gray-600 text-lg font-medium mt-1">{`${textDay}  : ${texthour} ${" "} : ${textMinute}`}</h5>
          <h5 className="text-gray-500 text-xs  font-medium mb-3">
            Days : Hours : Minutes
          </h5>

          <button
            type="button"
            className=" inline-block rounded bg-black px-12 py-2 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            Participate Now
          </button>
        </div>
      </div>
    </div>
    </Link>
  </div>
   )
  }

  // Past challenges
  else if(status === "past"){

    setContestStatus="text-white text-xs font-thin mb-2 px-3 py-1 bg-red-500 rounded-md capitalize "

    return(
      <div>
      <Link to={`competition/${challenge_name}`} >
      <div className="flex justify-center hover:cursor-pointer transition-transform duration-500 transform ease-in-out hover:scale-105">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg " src={img} alt="" />
          <div className="py-8 px-20 text-center">
            <span className={setContestStatus}>
              {status}
            </span>
            <h5 className="text-gray-900 text-md font-semibold mb-2 mt-4 capitalize">
              {challenge_name}
            </h5>

            {
             
            }
            <h5 className="text-gray-900 text-sm font-medium ">Ended on:</h5>
            <h5 className="text-gray-600 text-lg font-medium mt-1">{`${endDate}  : ${endMonth} ${" "}`}</h5>
            <h5 className="text-gray-500 text-xs  font-medium mb-3">
              Days : Month
            </h5>

            <button
              type="button"
              className=" inline-block rounded bg-black px-12 py-2 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Participate Now
            </button>
          </div>
        </div>
      </div>
      </Link>
    </div>
    )
  }else{
    setContestStatus="text-white text-xs font-thin mb-2 px-3 py-1 bg-yellow-500 rounded-md capitalize "
    return (
      <div>
      <Link to={`competition/${challenge_name}`} >
      <div className="flex justify-center hover:cursor-pointer transition-transform duration-500 transform ease-in-out hover:scale-105">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg " src={img} alt="" />
          <div className="py-8 px-20 text-center">
            <span className={setContestStatus}>
              {status}
            </span>
            <h5 className="text-gray-900 text-md font-semibold mb-2 mt-4 capitalize">
              {challenge_name}
            </h5>

            {
             
            }
            <h5 className="text-gray-900 text-sm font-medium ">Ends in:</h5>
            <h5 className="text-gray-600 text-lg font-medium mt-1">{`${endDay}  : ${endHour} ${" "} : ${endMin}`}</h5>
            <h5 className="text-gray-500 text-xs  font-medium mb-3">
              Days : Hours : Minutes
            </h5>

            <button
              type="button"
              className=" inline-block rounded bg-black px-12 py-2 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Participate Now
            </button>
          </div>
        </div>
      </div>
      </Link>
    </div>
    )
  }

};

export default CompetitionCard;
