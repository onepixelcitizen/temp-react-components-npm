import React, { FC } from "react";
import styled from "styled-components";

interface ITagProps {
  text: string;
  onClick: (e: any) => void;
}

const Close = styled.button`
  background: #ffebeb;
  color: red;
  padding: 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding: 0px 0px 2px 0;

  &:hover {
    background: #ffdbdb;
  }
`;

export const TagsWrapper: FC = ({ children }) => {
  return (
    <div className="flex justify-center py-6">
      <span className="mr-4 pt-1 text-sm text-gray-500">Filter by:</span>
      {children}
    </div>
  );
};

const Tag: FC<ITagProps> = ({ text, onClick }) => {
  return (
    <>
      {text === "x" ? (
        <Close onClick={onClick}>×</Close>
      ) : (
        <button
          onClick={onClick}
          className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          <span># {text}</span>
        </button>
      )}
    </>
  );
};

export default Tag;
