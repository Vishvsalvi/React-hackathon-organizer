import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CompetitionDetails from "./Pages/CompetitionDetails";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateCompetition from "./Pages/CreateCompetition";
import EditData from "./Pages/EditData";
export const competitionContext = React.createContext();

function App() {
  const [competitionArray, setCompetitionArray] = useState([]);
  const [constantData, setConstantData] = useState([]);

  const url = "/db/competition_data"; // API URL
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const final_data = response.data;
      setCompetitionArray(final_data);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    fetchData();
    fetchForFilter();
  }, []);

  // Unchanged data for search and filter
  const fetchForFilter = async () => {
    const response = await axios(url);
    const final_data = response.data;
    setConstantData(final_data);
  };
  // DELETE CHALLENGE
  const deleteCompetition = async (id) => {
    try {
      const deleteChallenge = await axios.delete(`${url}/${id}`);
    } catch (err) {
      console.log(err.response.data);
    }

    fetchData();
  };

  //  CREATE CHALLENGE
  const createCompetition = async (
    name,
    details,
    img,
    level,
    start_date,
    end_date
  ) => {
    let status = "";

    const now = new Date().getTime();
    const time_gap_start = new Date(start_date).getTime() - now;
    const time_gap_end = new Date(end_date).getTime() - now;

    if (time_gap_start > 0) {
      console.log(time_gap_start);
      status = "upcoming";
    } else if (time_gap_end > 0) {
      status = "active";
      console.log(time_gap_end);
    } else if (time_gap_start < 0 && time_gap_end < 0) {
      status = "past";
    }

    const newId = new Date().getMilliseconds();
    try {
      const response = await axios.post(url, {
        id: newId,
        challenge_name: name.toLowerCase(),
        details,
        status,
        level,
        img,
        start_date,
        end_date,
      });
      fetchData();
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Filter Challenges
  const filterChallenge = (status, level) => {
    let data = constantData;

    // Filter for status

    if (status === "every status") {
      data = data.filter((element) => {
        return element.status !== status;
      });
    } else {
      data = data.filter((element) => {
        return element.status === status;
      });
    }
    // Filter for level
    if (level === "any level") {
      data = data.filter((element) => {
        return element.level !== level;
      });
    } else {
      data = data.filter((element) => {
        return element.level === level;
      });
    }

    setCompetitionArray(data);
  };

  // Search for challenge
  const searchChallenges = (name) => {
    let search = name.toLowerCase();
    let data = constantData;
    const filteredData = data.filter((item) => {
      return Object.keys(item).some((key) => {
        return item[key].toString().includes(search);
      });
    });
    setCompetitionArray(filteredData);
  };

  const editChallenge = async (
    name,
    details,
    level,
    img,
    id,
    start_date,
    end_date
  ) => {
    let status = "";
    const now = new Date().getTime();
    const time_gap_start = new Date(start_date).getTime() - now;
    const time_gap_end = new Date(end_date).getTime() - now;

    if (time_gap_start > 0) {
      console.log(time_gap_start);
      status = "upcoming";
    } else if (time_gap_end > 0) {
      status = "active";
      console.log(time_gap_end);
    } else if (time_gap_start < 0 && time_gap_end < 0) {
      status = "past";
    }

    try {
      console.log(competitionArray.length);
      const response = await axios.put(`${url}/${id}`, {
        id,
        challenge_name: name.toLowerCase(),
        details,
        status,
        level,
        img,
        start_date,
        end_date,
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <competitionContext.Provider
      value={{
        competitionArray,
        deleteCompetition,
        createCompetition,
        filterChallenge,
        searchChallenges,
        editChallenge,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="edit/:name" element={<EditData />} />
          <Route
            path="competition/:challenge"
            element={<CompetitionDetails />}
          ></Route>
          <Route path="create" element={<CreateCompetition />}></Route>
        </Routes>
      </BrowserRouter>
    </competitionContext.Provider>
  );
}

export default App;
