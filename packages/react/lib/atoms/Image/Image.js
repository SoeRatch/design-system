import React from 'react';
import Spacing from '../../foundation/Spacing.js';

const Image = ({ url, width = Spacing.xl, height = Spacing.xl }) => {
    const className = ` dsyse-width-${width} dsyse-height-${height}`;
    return React.createElement("img", { className: className, src: url });
};

export { Image as default };
//# sourceMappingURL=Image.js.map
