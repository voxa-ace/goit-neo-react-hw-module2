// import React from "react";
import PropTypes from "prop-types";
import "./Description.module.css";


const CafeInfo = ({ name, description }) => {
  return (
    <div className="cafe-info">
      <h2 className="cafe-name">{name}</h2>
      <p className="cafe-description">{description}</p>
    </div>
  );
};

CafeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CafeInfo;