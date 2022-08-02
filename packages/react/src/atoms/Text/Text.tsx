import React from "react";
import { FontSize } from "@dsys.e/foundation";

interface TextProps {
    size?: keyof typeof FontSize,
    children: React.ReactNode
}

const Text: React.FC<TextProps> = ({ size=FontSize.base , children }) => {
    const className = ` dsyse-text dsyse-text-${size}`;
    return <p 
            className={className}>
                {children}
            </p>
}

export default Text;

