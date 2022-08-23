import React from 'react';
import Link from "next/link";

const MyLink = ({to, className, children, ...props}) => {
  return (
    <Link href={to}>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
};

export default MyLink;
