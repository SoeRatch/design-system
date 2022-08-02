import React from "react";
import Spacing from "../../foundation/Spacing";

interface ImageProps {
    url:"string",
    width?: keyof typeof Spacing,
    height?: keyof typeof Spacing
}

const Image:React.FC<ImageProps> = ({url,width=Spacing.xl,height=Spacing.xl}) =>{
    const className = ` dsyse-width-${width} dsyse-height-${height}`
    return <img 
                className={className}
                src={url}>
           </img>
}

export default Image