import React, { useRef, useEffect } from "react";
import Macy from "macy";

const Masonary = ({ children, refresh }: any) => {
  const macyRef = useRef<any>(null!);

  useEffect(() => {
    macyRef.current = Macy({
      container: ".container",
      useContainerForBreakpoints: true,
      trueOrder: true,
      waitForImages: false,
      margin: 24,
      columns: 3,
      breakAt: {
        1200: 3,
        940: 2,
        520: 1,
        400: 1,
      },
    });
  }, [refresh]);

  return <div className="container">{children}</div>;
};

export default Masonary;
