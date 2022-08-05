import React from 'react';

const Margin = ({ space = 'xxxs', children, left, right, top, bottom }) => {
    let className = ``;
    if (!left && !right && !top && !bottom) {
        className = `dsyse-margin-${space}`;
    }
    if (left) {
        className = `${className} dsyse-margin-left-${space}`;
    }
    if (right) {
        className = `${className} dsyse-margin-right-${space}`;
    }
    if (top) {
        className = `${className} dsyse-margin-top-${space}`;
    }
    if (bottom) {
        className = `${className} dsyse-margin-bottom-${space}`;
    }
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
