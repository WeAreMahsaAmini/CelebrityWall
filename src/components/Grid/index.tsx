import React from "react";

import {
  TransformWrapper,
  TransformComponent,
} from "@pronestor/react-zoom-pan-pinch";
import { data } from "../../data/celebrities";
import { Card } from "../Card";

export const Grid = () => {
  const { celebrities } = data;

  const renderBoxes = () => {
    return celebrities.map((celebrity) => <Card celebrity={celebrity} />);
  };
  return (
    <TransformWrapper
      minScale={0.5}
      maxScale={3}
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="flex space-x-2 items-center justify-center">
            <button
              onClick={() => {
                zoomIn();
              }}
            >
              +
            </button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent>
            <div className="flex flex-wrap m-5 items-start h-[100vh] w-[100vw] ">
              {renderBoxes()}
            </div>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};
