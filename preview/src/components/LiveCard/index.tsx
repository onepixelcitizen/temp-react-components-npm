import React, { FC, forwardRef, RefObject } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import { customTheme } from "../../utils/theme";

interface ILiveCard {
  code: any;
  scope: any;
  prop?: string | string[];
  ref?: RefObject<any>;
  filter?: string;
}

const LiveCard: FC<ILiveCard> = forwardRef<any, ILiveCard>((props, ref) => {
  const { code, scope, filter } = props;

  return (
    <div className="p-2 item" ref={ref} data-filter={filter}>
      <div className="rounded overflow-hidden shadow-lg">
        <div className="w-full bg-white">
          <LiveProvider code={code} scope={scope} theme={customTheme}>
            <LiveEditor />
            <div className="bg-red-600">
              <LiveError />
            </div>
            <div className="p-6 border-dashed border-b border-gray-300 ">
              <LivePreview />
            </div>
          </LiveProvider>
        </div>
        {/* <div className="px-6 pt-4 bg-white">
          <div className="flex items-center">
            <div className="font-bold text-sm mb-3">Props</div>
          </div>

          {prop &&
            isArray(prop) &&
            prop.map(p => {
              return (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  aria-label="string | number"
                  data-balloon-pos="up"
                >
                  {p}
                </span>
              );
            })}
        </div> */}
        <div className="px-6 py-4">
          <button className="bg-indigo-700 hover:bg-indigo-500 text-white text-xs font-bold py-2 px-4 rounded-full">
            View Component
          </button>
        </div>
      </div>
    </div>
  );
});

export default LiveCard;
