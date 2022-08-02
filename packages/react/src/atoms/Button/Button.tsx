import React, { FunctionComponent } from "react";

interface ButtonProps {
    label : string
}


const Button: FunctionComponent<ButtonProps> = ({ label }) => {
    return <button className="dsyse-button-container">{label || 'Button'} - LABEL HERE</button>
}

export default Button