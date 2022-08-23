import React from 'react';

const Button = ({children, className, ...props}) => {
  const classes = ["btn", "my-default-btn"]
  if(className) {
    classes.push(className);
  }

  return (
    <button className={classes.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
