import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { competitionContext } from "../App";

const CreateCompetition = () => {
  const navigate = useNavigate();
  const { createCompetition } = useContext(competitionContext);

  const [challengeName, setChallengeName] = useState("");
  const [challengeDetail, setChallengeDetail] = useState("");
  const [img, setImg] = useState("");
  const [level, setLevel] = useState("easy")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    createCompetition(challengeName, challengeDetail, img, level, startTime, endTime);
    navigate("/");
  };

  return (
    <div className="px-10 py-10">
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              {/* NAVIGATION */}
              <nav aria-label="Breadcrumb" className="mb-8 ">
                <ol
                  role="list"
                  className=" mr-10 flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                  <li>
                    <div className="flex items-center">
                      <Link
                        to="/"
                        className="mr-2 text-sm font-medium text-gray-900"
                      >
                        Competitions
                      </Link>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>

                  <li className="text-sm">
                    <span
                      to="/"
                      aria-current="page"
                      className="font-medium text-gray-500 hover:text-gray-600"
                    >
                      Create
                    </span>
                  </li>
                </ol>
              </nav>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Create Challenge
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleClick} method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Challenge Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          onChange={(e) => setChallengeName(e.target.value)}
                          value={challengeName}
                          required
                          type="text"
                          name="challenge-name"
                          id="challenge-name"
                          className="block w-full flex-1 rounded-md p-2 border-gray-300 focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                          placeholder="Example: Neural net development"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        onChange={(e) => setChallengeDetail(e.target.value)}
                        value={challengeDetail}
                        required
                        id="about"
                        name="about"
                        rows="3"
                        className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description of your challenge
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {/* Upload Image */}
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="image-link"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image Link
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                        required
                          onChange={(e) => setImg(e.target.value)}
                          value={img}
                          type="text"
                          name="image-link"
                          id="image-link"
                          className="block w-full flex-1 rounded-md p-2 border-gray-300 focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                          placeholder="https://images.unsplash.com/photo-1517962847327-e8032e806fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        />
                      </div>
                    </div>
                    {/* Level */}
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="image-link"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Level
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                      <select required onChange={
              (e) => {
                setLevel(e.target.value)
              }
            } className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="col-span-3 sm:col-span-2">
                    <label
                        htmlFor="start-date"
                        className="block text-sm font-medium text-gray-700"
                      >
                       Start Date
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                        required
                        value={startTime}
                        onChange={e=>{
                          setStartTime(e.target.value)
                        }}
                          type="datetime-local"
                          min="08-11-2022"
                          name="start-date"
                          id="start-date"
                          className="block w-full flex-1 rounded-md p-2 border-gray-300 focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                          placeholder="https://images.unsplash.com/photo-1517962847327-e8032e806fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        />
                      </div>
                    </div>

                    {/* End Date */}
                    <div className="col-span-3 sm:col-span-2">
                    <label
                        htmlFor="end-date"
                        className="block text-sm font-medium text-gray-700"
                      >
                       End Date
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                        value={endTime}
                        onChange={e=>{
                          setEndTime(e.target.value)
                        }}
                        required
                          type="datetime-local"
                          min="08-11-2022"
                          name="end-date"
                          id="end-date"
                          className="block w-full flex-1 rounded-md p-2 border-gray-300 focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                          placeholder="https://images.unsplash.com/photo-1517962847327-e8032e806fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompetition;
