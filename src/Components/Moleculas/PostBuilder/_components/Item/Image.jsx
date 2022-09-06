import React, {useRef} from 'react';
import {createReactElement} from "../../index";

const Image = ({jsxObj}) => {
  const ComponentRef = useRef(null);

  const Component = createReactElement({
    ...jsxObj,
    props: {
      ...jsxObj.props,
      ref: ComponentRef
    }
  });


  return (
    <>
      {Component}
    </>
  );
};

export default Image;
