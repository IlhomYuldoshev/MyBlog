import React, {useRef, useState} from 'react';
import {createReactElement} from "../../index";

const Image = ({jsxObj}) => {
  const ComponentRef = useRef(null);
  const [image, setImage] = useState(null);

  const onChangeHandler = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
  }

  const handleUploadImage = () => {
    ComponentRef.current.click();
  }

  const handleDeleteImage = () => {
    ComponentRef.current.value = null;
    setImage(null);
  }


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
      <div className="post-build-item__image-input-actions">
        {
          image
            ? (
              <div className="my-default-btn small-btn dangerBtn" onClick={handleDeleteImage}>
                Delete Image
              </div>
            )
            : (
              <div className="my-default-btn small-btn successBtn" onClick={handleUploadImage}>
                Upload Image
              </div>
            )
        }
      </div>
      {image && <img src={image} alt="222"/>}
    </>
  );
};

export default Image;
