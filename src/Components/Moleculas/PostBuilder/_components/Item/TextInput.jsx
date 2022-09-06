import React, {useEffect, useRef, useState} from 'react';
import {createReactElement} from "../../index";

const TextInput = ({jsxObj}) => {
  const ComponentRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState(80);


  function onChangeHandler(e) {
    if (ComponentRef.current) {
      console.log(ComponentRef)
      setTextAreaHeight(ComponentRef.current?.scrollHeight);
    }
  }


  useEffect(() => {
    if (ComponentRef.current) {
      ComponentRef.current.style.height = textAreaHeight + "px"
    }
  }, [textAreaHeight])


  // TODO - ref to'gri ishlayotganini tekshirish kerak
  const Component = createReactElement({
    ...jsxObj,
    props: {
      ...jsxObj.props,
      onChange: (e) => {
        onChangeHandler(e);
      },
      ref: ComponentRef
    }
  });


  return (
    <>
      {Component}
    </>
  );
};

export default TextInput;
