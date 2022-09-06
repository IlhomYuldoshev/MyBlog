import React from 'react';
import {createReactElement} from "../../index";

const Line = ({jsxObj}) => {


  const Component = createReactElement(jsxObj);


  return (
    <>
      {Component}
    </>
  );
};

export default Line;
