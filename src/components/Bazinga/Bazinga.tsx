import React, { FC } from 'react';

interface IProps {
  text: string
}

const Bazinga:FC<IProps> = ({text = 'Sheldon'}) => {
  return (
    <div>
      Hello Bazinga {text}
    </div>
  );
};


export default Bazinga;
