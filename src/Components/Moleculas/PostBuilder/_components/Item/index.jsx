import React, {useState} from 'react';
import {DeleteSvg, DragSvg} from "../../../../../Svgs";
import TextInput from "./TextInput";
import Line from "./Line";
import Image from "./Image";

// TODO - qo'shimcha backendga valuesini yuboramiz
//  keyin get qilganda shu malumot objni render qilamiz
//  render element haqiqiy korinishi productionda
export const componentMappings = {
  Textarea: {
    type: "textarea",
    props: {
      className: "base-input post-build-item__textarea",
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
    renderElement: "img",
  },
  Line: {
    type: "div",
    props: {
      className: "post-build-item__hr"
    },
    children: null,
    renderElement: "div"
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
    changeOrder
  }
) => {
  const [isOver, setIsOver] = useState(false);
  const dragClassName = currentDrag && (currentDrag.id === jsxObj.id ? "post-build-item--dragging" : "post-build-item--dropping")
  const isMainItem = jsxObj.mainTitle || jsxObj.mainText;

  let Component;
  switch (jsxObj.type) {
    case "textarea": {
      Component = TextInput;
      break;
    }
    case "input": {
      Component = Image;
      break;
    }
    case "div": {
      Component = Line;
      break;
    }
    default: {
      Component = null;
    }
  }


  function onDragStart() {
    setCurrentDrag(jsxObj);
  }

  function onDragEnd() {
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
        <Component jsxObj={jsxObj}/>
      </div>

      {!isMainItem &&
        (<div className="post-build-item__actions-wrapper">
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
        </div>)
      }

      {/* ------ DRAG BOX CHIZISH UCHUN KERAK ----------- */}
      {!!currentDrag && !isMainItem && (
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
