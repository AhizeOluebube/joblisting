import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../jobs/Jobs.css";

const Jobs = ({ jobs, handleAddOption }) => {
  return (
    <div className="d-flex flex-column custom-container  jobs mx-auto">
      {jobs.map((job) => {
        return (
          <div
            key={job.id}
            className={`d-flex flex-column position-relative gap-lg-4 flex-lg-row w-100 p-4 px-lg-5 pt-5 justify-content-between align-items-lg-center rounded-4 text-start bg-white general ${
              job.featured ? "border1 border-5" : ""
            }`}
          >
            <img className="positions " src={job.logo} alt="" />
            <div>
              <div className="d-flex w-100 gap-3">
                <p className="company fw-bold">{job.company}</p>
                {job.new && (
                  <p className="text-white new mw-content rounded-5 w-50 py-1 px-3">
                    {job.new ? "NEW!" : ""}
                  </p>
                )}
                {job.featured && (
                  <p className="bg-black text-white mw-content rounded-5 w-50 py-1 px-3">
                    {job.featured ? " FEATURED" : ""}
                  </p>
                )}
              </div>
              <p className="position fw-bold fs-5">{job.position}</p>
              <ul className="d-flex gap-4 time ps-0">
                <li className="fw-semibold">{job.postedAt}</li>
                <li className="fw-semibold">{job.contract}</li>
                <li className="fw-semibold">{job.location}</li>
              </ul>
              <hr className="d-lg-none" />
            </div>
            <div className="d-flex gap-3 roleall align-items-center flex-wrap">
              <p
                className="py-1 px-3 role fw-bold"
                onClick={() => {
                  handleAddOption(job.role);
                }}
              >
                {job.role}
              </p>
              <p
                className="py-1 px-3 role fw-bold"
                onClick={() => {
                  handleAddOption(job.level);
                }}
              >
                {job.level}
              </p>
              {job.languages.map((language) => {
                return (
                  <p
                    key={language}
                    className="py-1 px-3 role fw-bold"
                    onClick={() => {
                      handleAddOption(language);
                    }}
                  >
                    {language}
                  </p>
                );
              })}
              {job.tools.map((tool) => {
                return (
                  <p
                    key={tool}
                    className="py-1 px-3 role fw-bold"
                    onClick={() => {
                      handleAddOption(tool);
                    }}
                  >
                    {tool}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
