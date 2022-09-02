import React, {useState} from 'react';

const EditImage = ({updateItem}) => {
  const [src, setSrc] = useState("")
  const [alt, setAlt] = useState("")

  const updateHandler = () => {
    updateItem({src, alt});
  }

  return (
    <div>
      <div style={{
        display: "flex"
      }}>
        <input
          value={src}
          type="text"
          placeholder="Add src"
          onChange={(e) => setSrc(e.target.value)}
          className="base-input"
        />
        <input
          value={alt}
          type="text"
          placeholder="Add alt"
          onChange={(e) => setAlt(e.target.value)}
          className="base-input"
        />
      </div>
      <button
        onClick={updateHandler}
        className="my-default-btn"
      >
        Save image
      </button>
    </div>
  )
}

const WriteImage = ({src, alt, updateItem}) => {
  return (
    <div>
      {
        src && alt ? <img src={src} alt={alt}/> : <EditImage updateItem={updateItem}/>
      }
    </div>
  );
};

export default WriteImage;
