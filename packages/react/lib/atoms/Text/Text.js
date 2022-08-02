import React from 'react';
import { FontSize } from '@dsys.e/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = ` dsyse-text dsyse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
