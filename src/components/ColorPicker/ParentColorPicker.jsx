import React from "react";
import ColorPicker from "./ColorPicker";

const red = "#EE4B2B";
const blue = "#89CFF0";
const green = "#7FFFD4";

const ParentColorPicker = () => {
  return (
    <div>
      <ColorPicker red={red} blue={blue} green={green} />
    </div>
  );
};

export default ParentColorPicker;
