import React from 'react';
import { Spacing } from '@dsys.e/foundation';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    const className = `dsyse-width-${width} dsyse-height-${height}`;
    return React.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
            width,
            height
        } });
};

export { Color as default };
//# sourceMappingURL=Color.js.map
