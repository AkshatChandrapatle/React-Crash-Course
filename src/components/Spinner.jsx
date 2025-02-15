import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { useState, CSSProperties } from "react";

const override = {
    display: "block",
    margin: "100px auto",
    borderColor: "red",
  };

const Spinner = ({loading}) => {
  return (
    <ClipLoader
        color= "#4338ca"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Spinner