import React, { FC } from 'react';

interface IPropsComponente {
  text: string;
  style: string; 
  fontSize?: number; 
}

const Componente: FC<IPropsComponente> = ({ text, style, fontSize }) => {
  return (
    <div style={{ color: style, fontSize: `${fontSize || 2}rem` }}> 
      <p>{text}</p>
    </div>
  );
};

export default Componente;