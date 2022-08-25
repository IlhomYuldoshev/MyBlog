import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const MyNavLink = ({to, className, children, ...props}) => {
  const {pathname: location} = useRouter();
  const isActivePath = location === to;

  const classes = ["defaultNavLink", isActivePath ? "activeNavLink" : ""];
  if (className) {
    classes.push(className);
  }

  return (
    <Link href={to}>
      <a className={classes.join(" ")} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default MyNavLink;
