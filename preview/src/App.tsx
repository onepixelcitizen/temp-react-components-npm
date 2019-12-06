import React, { useEffect, useState } from "react";

import LiveCard from "./components/LiveCard";
import Masonary from "./components/Masonary";
import Header from "./components/Header";
import Tag, { TagsWrapper } from "./components/Tag";

import { TestComponent, Bazinga, Button } from "./ui-library";

const scope = { Bazinga };
const code = `<>
  <Bazinga from="Chubaka"/>
  <Bazinga />
</>`;

const code1 = `<TestComponent text="Styled Component from UI library" />`;
const scope1 = { TestComponent };

const code2 = `<Button text="Say Hello" onClick={()=> alert('Hello world')} />`;
const scope2 = { Button };

const App = () => {
  const [toggle, setToggle] = useState("");

  useEffect(() => {
    const els = document.querySelectorAll(".item.hidden");
    for (let i = 0, all = els.length; i < all; i++) {
      els[i].classList.remove("hidden");
    }
    if (
      toggle !== "" &&
      document.querySelectorAll(`[data-filter="${toggle}"]`).length !== 0
    ) {
      const els = document.querySelectorAll(
        `.item:not([data-filter="${toggle}"])`,
      );

      for (let i = 0, all = els.length; i < all; i++) {
        els[i].classList.add("hidden");
      }
    }
  }, [toggle]);

  return (
    <>
      <Header />

      <TagsWrapper>
        <Tag text="miscellaneous" onClick={() => setToggle("misc")} />
        <Tag text="button" onClick={() => setToggle("button")} />
        <Tag text="x" onClick={() => setToggle("")} />
      </TagsWrapper>

      <Masonary refresh={toggle}>
        <LiveCard
          code={code}
          scope={scope}
          filter="misc"
          prop={["122", "2332"]}
        />
        <LiveCard code={code1} scope={scope1} filter="misc" />
        <LiveCard code={code2} scope={scope2} filter="button" />
        <LiveCard code={code1} scope={scope1} filter="misc" />
        <LiveCard code={code2} scope={scope2} filter="button" />
        <LiveCard
          code={code}
          scope={scope}
          filter="misc"
          prop={["122", "2332"]}
        />
      </Masonary>
    </>
  );
};

export default App;
