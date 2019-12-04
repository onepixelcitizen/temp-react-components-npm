import React, { Component } from 'react';
import styled from 'styled-components';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'
import { PrismTheme } from 'prism-react-renderer';


import { TestComponent, Bazinga } from './reactComponentLib';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

const scope = { Bazinga };
const code  = `<Bazinga text="890"/>`;

const customTheme: PrismTheme= {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36"
  },
  styles: [{
    types: ["prolog", "constant", "builtin"],
    style: {
      color: "rgb(189, 147, 249)"
    }
  }, {
    types: ["inserted", "function"],
    style: {
      color: "rgb(80, 250, 123)"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["changed"],
    style: {
      color: "rgb(255, 184, 108)"
    }
  }, {
    types: ["punctuation", "symbol"],
    style: {
      color: "rgb(248, 248, 242)"
    }
  }, {
    types: ["string", "char", "tag", "selector"],
    style: {
      color: "rgb(255, 121, 198)"
    }
  }, {
    types: ["keyword", "variable"],
    style: {
      color: "rgb(189, 147, 249)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(98, 114, 164)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "rgb(241, 250, 140)"
    }
  }]
};


class App extends Component {
  render() {
    return (
      <div>
        <TestComponent text="Styled Component from React library" />
        <Bazinga text="zzzz"/>
        <StyledDiv>Example App styled component</StyledDiv>
        <LiveProvider code={code} scope={scope} theme={customTheme}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }
}

export default App;
