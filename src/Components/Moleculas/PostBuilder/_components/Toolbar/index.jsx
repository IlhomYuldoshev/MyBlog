import React from 'react';
import {componentMappings} from "../Item";
import {v4} from "uuid";

const WriteToolbar = ({addItem, formId}) => {

  const addItemHandler = (key) => {
    const id = v4();
    const props = key !== "Line" ? {
      ...componentMappings[key].props,
      name: id,
      form: formId
    } : componentMappings[key].props

    addItem({
      ...componentMappings[key],
      props,
      id
    })
  }

  return (
    <div className="post-builder__toolbar">
      <div className="post-builder__toolbar-hover-element">
        <div className="post-builder__toolbar-hover-circle"/>
        <div className="post-builder__toolbar-hover-circle"/>
        <div className="post-builder__toolbar-hover-circle"/>
        <div className="post-builder__toolbar-hover-circle"/>
        <div className="post-builder__toolbar-hover-circle"/>
        <div className="post-builder__toolbar-hover-circle"/>
      </div>
      <div className="post-builder__toolbar-inner">
        {
          Object.keys(componentMappings).map((key, idx) => (
            <button
              key={idx}
              onClick={() => addItemHandler(key)}
              className="my-default-btn"
            >
              {key}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default WriteToolbar;
