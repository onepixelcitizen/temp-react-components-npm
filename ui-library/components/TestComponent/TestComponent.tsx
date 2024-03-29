import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  color: orange;
`;

export interface TestComponentProps {
  text?: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ text }) => (
  <Wrapper>{text ? text : "Test Component"}</Wrapper>
);

export default TestComponent;
