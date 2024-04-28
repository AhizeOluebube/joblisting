import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilteredOptions from "../src/components/filteredOptions/FilteredOptions";
import Jobs from "./components/jobs/Jobs";
import jobData from "./utils/jobData";

function App() {
  const [jobs, setJobs] = useState(jobData);
  // console.log(jobs);

  const [filteredBy, setFilteredBy] = useState([]);

  useEffect(() => {
    if (filteredBy.length < 1) {
      setJobs(jobData);
      return;
    }
    let updatedJobs = []
    filteredBy.forEach((eachCriteria, index) => { 
      if(index === 0){
        updatedJobs = jobData.filter((job) => {
          return (
            job.languages.includes(eachCriteria) ||
            job.tools.includes(eachCriteria) ||
            job.role === eachCriteria ||
            job.level === eachCriteria
          );
        });
        setJobs(updatedJobs)
        return
      }
     updatedJobs = updatedJobs.filter((job) => {
        return (
          job.languages.includes(eachCriteria) ||
          job.tools.includes(eachCriteria) ||
          job.role === eachCriteria ||
          job.level === eachCriteria
        );
      });
      setJobs(updatedJobs);
    });
  }, [filteredBy]);

  const handleRemoveOption = (incomingOption) => {
    const newFilteredBy = filteredBy.filter(
      (eachOption) => eachOption.toLowerCase() !== incomingOption.toLowerCase()
    );
    setFilteredBy(newFilteredBy);
  };

  const handleAddOption = (incomingOption) => {
    if (!filteredBy.includes(incomingOption)) {
      setFilteredBy([...filteredBy, incomingOption]);
    }
  };
  return (
    <>
      <FilteredOptions
        filteredBy={filteredBy}
        setFilteredBy={setFilteredBy}
        handleRemoveOption={handleRemoveOption}
      />
      <Jobs jobs={jobs} handleAddOption={handleAddOption} />
    </>
  );
}
export default App;
