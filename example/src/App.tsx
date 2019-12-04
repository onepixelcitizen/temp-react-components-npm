import React, { Component } from 'react';
import styled from 'styled-components';

import { TestComponent, Bazinga } from './reactComponentLib';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

class App extends Component {
  render() {
    return (
      <div>
        <TestComponent text="Styled Component from React library" />
        <Bazinga text="z"/>
        <StyledDiv>Example App styled component</StyledDiv>
      </div>
    );
  }
}

export default App;
