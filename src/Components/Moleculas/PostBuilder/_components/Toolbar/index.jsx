import React from 'react';
import {componentMappings} from "../Item";

const WriteToolbar = ({addItem}) => {
  return (
    <div className="post-builder__toolbar">
      {
        Object.keys(componentMappings).map((key, idx) => (
          <button
            key={idx}
            onClick={() => addItem(componentMappings[key])}
            className="my-default-btn"
          >
            {key}
          </button>
        ))
      }
    </div>
  );
};

export default WriteToolbar;
