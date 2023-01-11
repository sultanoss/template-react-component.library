import React from "react";

interface ButtonProps {
  lable: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.lable}</button>;
};

export default Button;
