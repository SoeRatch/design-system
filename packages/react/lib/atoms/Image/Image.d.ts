import React from "react";
import Spacing from "../../foundation/Spacing";
interface ImageProps {
    url: "string";
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Image: React.FC<ImageProps>;
export default Image;
