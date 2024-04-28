import React, { useEffect } from "react";

const Options = ({ filteredBy, setFilteredBy, handleRemoveOption }) => {
  return (
    <div className="d-flex custom-container options p-4 mx-auto start-0 end-0 my-4 bg-white position-absolute justify-content-between align-items-center rounded-3">
      <div>
        <div className=" d-flex flex-wrap gap-3">
          {filteredBy.map((eachOption) => {
            return (
              <div key={eachOption} className="d-flex option rounded">
                <p className="m-0 py-1 px-3 rounded-start">{eachOption}</p>
                <p
                  className=" text-white m-0 py-1 px-3 rounded-end each"
                  onClick={() => {
                    handleRemoveOption(eachOption);
                  }}
                >
                  X
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <small
        onClick={() => {
          setFilteredBy([]);
        }}
      >
        Clear
      </small>
    </div>
  );
};

export default Options;
