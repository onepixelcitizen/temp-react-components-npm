import React, { FC } from "react";

export interface IProps {
  from: string;
}

const Bazinga: FC<IProps> = ({ from = "Sheldon" }) => {
  return <div>Bazinga from {from}</div>;
};

export default Bazinga;
