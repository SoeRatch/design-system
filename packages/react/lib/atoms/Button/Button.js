import React from 'react';

const Button = ({ label }) => {
    return React.createElement("button", { className: "dsyse-button-container" },
        label || 'Button',
        " - LABEL HERE");
};

export { Button as default };
//# sourceMappingURL=Button.js.map
