import React from 'react';
import {createReactElement} from "../../index";

export const componentMappings = {
  Textarea: {
    type: "textarea",
    props: {
      className: "base-input post-build-item__textarea",
      type: "text"
    },
    children: null
  },
  Image: {
    type: "input",
    props: {
      className: "base-input post-build-item__img-input",
      type: "file"
    },
    children: null,
    // TODO - qo'shimcha backendga valuesini yuboramiz
    //  keyin get qilganda shu malumot objni render qilamiz
    //  render element haqiqiy korinishi productionda
    renderElement: "p",
  },
  Line: {
    type: "hr",
    props: {
      className: "post-build-item__hr"
    },
    children: null,
    renderElement: "hr"
  },
  Heading: {
    type: "textarea",
    props: {
      className: "base-input post-build-item__title"
    },
    children: null,
    renderElement: "h2",
  }
}

const WriteItem = ({jsxObj}) => {
  const Component = createReactElement(jsxObj);

  return (
    <div className="post-build-item">
      {Component}
    </div>
  );
};

export default WriteItem;
