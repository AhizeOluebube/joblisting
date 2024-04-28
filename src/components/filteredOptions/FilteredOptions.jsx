import React from "react";
import "./FilteredOptions.css";
import headerMobile from "../../assets/images/bg-header-mobile.svg";
import headerDesktop from "../../assets/images/bg-header-desktop.svg";
import Options from "../options/Options";

const FilteredOptions = ({ filteredBy, setFilteredBy, handleRemoveOption }) => {
  return (
    <div className="position-relative">
      <img className="image d-lg-none " src={headerMobile} alt="" />
      <img className="image d-none d-lg-inline" src={headerDesktop} alt="" />
      {filteredBy.length > 0 ? (
        <Options
          filteredBy={filteredBy}
          setFilteredBy={setFilteredBy}
          handleRemoveOption={handleRemoveOption}
        />
      ) : null}
    </div>
  );
};

export default FilteredOptions;
