import React, {useEffect, useState} from 'react';
import WriteItem from "./_components/Item";
import WriteToolbar from "./_components/Toolbar";
import {useForm} from "react-hook-form";
import {v4} from "uuid";

// TODO - KODNI REFACTOR QILISH KERAK!!!

const PostBuilder = () => {
  const [currentDrag, setCurrentDrag] = useState(null);
  const [items, setItems] = useState([]);

  const addItem = (jsxObj) => {
    setItems(p => [...p, jsxObj]);
  }

  const removeItem = (id) => {
    setItems(p => p.filter(item => item.id !== id));
  }

  const changeOrder = (currentId, toId) => {
    setItems(prev => {
      const p = [...prev];
      const currentIndex = p.findIndex(item => item.id === currentId);
      const toIndex = p.findIndex(item => item.id === toId);
      const tmp = p[toIndex];
      p[toIndex] = p[currentIndex];
      p[currentIndex] = tmp;
      return p;
    })
  }

  useEffect(() => {
    const idTitle = v4();
    const idText = v4();
    setItems(p => [
      ...p,
      {
        type: "textarea",
        props: {
          className: "base-input post-build-item__main-title",
          form: "post-builder-form",
          name: idTitle
        },
        children: null,
        id: idTitle,
        mainTitle: true
      },
      {
        type: "textarea",
        props: {
          className: "base-input post-build-item__main-text",
          form: "post-builder-form",
          name: idText
        },
        children: null,
        id: idText,
        mainText: true
      }
    ])
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const [key, value] of formData.entries()) {
      console.log(key, "===", value)
    }
  }

  return (
    <div className="post-builder">
      <form onSubmit={onSubmit} id="post-builder-form">
        {
          items.map((item) => (
            <WriteItem
              key={item.id}
              jsxObj={item}
              removeItem={removeItem}
              currentDrag={currentDrag}
              setCurrentDrag={setCurrentDrag}
              changeOrder={changeOrder}
            />
          ))
        }
      </form>
      <WriteToolbar
        addItem={addItem}
        formId={"post-builder-form"}
      />
      <div style={{marginTop: 20}}>
        <button className="my-default-btn" type="submit" form="post-builder-form">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostBuilder;


// TODO - children oddiy text yoki null bo'lgani uchun rekursiya yo'q
export function createReactElement(obj) {
  return React.createElement(obj.type, obj.props, obj.children);

  // let children = obj.children;
  // if (Array.isArray(obj.children)) {
  //   children = children?.map(childItem => createReactElement(childItem));
  // }
  // if (Array.isArray(children)) {
  //   return React.createElement(obj.type, {...obj.props }, ...children);
  // } else {
  //   return React.createElement(obj.type, {...obj.props }, children);
  // }
}
