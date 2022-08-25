import React, {useState} from 'react';
import Button from "../Button";

const FollowBtn = ({className, ...props}) => {
  const [state, setState] = useState(false);

  const handleFollowUser = () => {
    setState(p => !p);
  }

  return (
    <Button
      onClick={handleFollowUser}
      className={`cta-btn follow-btn ${className ? className : ""} ${state ? "follow-btn--active" : ""}`}
      {...props}
    >
      {
        state
          ? "Following"
          : "Follow"
      }
    </Button>
  );
};

export default FollowBtn;
