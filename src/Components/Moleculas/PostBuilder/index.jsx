import React, {useState} from 'react';
import WriteItem from "./_components/Item";
import WriteToolbar from "./_components/Toolbar";
import {useForm} from "react-hook-form";

const PostBuilder = () => {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const [items, setItems] = useState([{
    type: "textarea",
    props: {
      className: "base-input post-build-item__textarea"
    },
    children: null
  }]);

  const addItem = (jsxObj) => {
    setItems(p => [...p, jsxObj]);
  }

  return (
    <div className="post22">
      <form onSubmit={handleSubmit((v) => {
        console.log(v);
      })}>
        {
          items.map((item, idx) => (
            <WriteItem
              key={idx}
              jsxObj={item}
              register={register}
            />
          ))
        }
      </form>
      <WriteToolbar addItem={addItem}/>
    </div>
  );
};

export default PostBuilder;


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
