import React from "react";
import { Spacing } from "@dsys.e/foundation";

interface ColorProps {
    hexCode: string,
    width?: keyof typeof Spacing,
    height?: keyof typeof Spacing
}

const Color: React.FC<ColorProps> = ({ hexCode, width=Spacing.sm, height=Spacing.sm }) =>{
    const className = `dsyse-width-${width} dsyse-height-${height}`
    return <div className={className} 
                style={{
                    backgroundColor:hexCode,
                    width,
                    height
                }}>
        
            </div>
}

export default Color