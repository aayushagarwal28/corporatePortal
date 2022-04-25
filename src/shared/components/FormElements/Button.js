import React from 'react';
import { Link } from 'react-router-dom';


const Button = props => {
  if (props.href) {
    return (
      <a
        className={props.className}
        href={props.href}
        {...props}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={props.className}
        {...props}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      id={props.id}
      className={props.className}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
