import React, {useState} from 'react';
import {createReactElement} from "../../index";
import {DeleteSvg, DragSvg} from "../../../../../Svgs";

export const componentMappings = {
  Textarea: {
    type: "textarea",
    props: {
      className: "base-input post-build-item__textarea",
      type: "text"
    },
    children: null,
    renderElement: "p",
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
    renderElement: "img",
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

const WriteItem = (
  {
    jsxObj,
    removeItem,
    currentDrag,
    setCurrentDrag,
    changeOrder,
    register
  }
) => {
  const Component = createReactElement(jsxObj);
  const [isOver, setIsOver] = useState(false);
  const dragClassName = currentDrag && (currentDrag.id === jsxObj.id ? "post-build-item--dragging" : "post-build-item--dropping")

  const onDragStart = () => {
    setCurrentDrag(jsxObj);
  }

  const onDragEnd = () => {
    setCurrentDrag(null);
  }

  function onDragLeave() {
    setIsOver(false);
  }

  function onDragOver(e) {
    e.preventDefault();
    setIsOver(true);
  }

  function onDrop(e) {
    e.preventDefault();
    setIsOver(false);

    if (currentDrag.id !== jsxObj.id) {
      changeOrder(currentDrag.id, jsxObj.id);
    }
  }

  return (
    <div
      className={`post-build-item ${dragClassName}`}
    >
      <div className="post-build-item__component-wrapper">
        {Component}
      </div>
      <div className="post-build-item__actions-wrapper">
        <div
          onDragStart={(e) => onDragStart(e)}
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnd={onDragEnd}
          onDragOver={(e) => onDragOver(e)}
          draggable={true}
        >
          <DragSvg
            className="post-build-item__drag-svg"
          />
        </div>
        <DeleteSvg
          onClick={() => removeItem(jsxObj.id)}
          className="post-build-item__delete-svg"
        />
      </div>


      {!!currentDrag && (
        (currentDrag.id !== jsxObj.id) && <div
          onDragStart={(e) => onDragStart(e)}
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnd={onDragEnd}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e)}
          draggable={true}
          className="post-build-item__drop-box"
          style={{backgroundColor: isOver ? "rgba(0,0,0,0.1)" : ""}}
        />
      )}
    </div>
  );
};

export default WriteItem;
