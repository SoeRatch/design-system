import React from "react";

import { Spacing } from '@dsys.e/foundation';

interface MarginProps {
    space?: keyof typeof Spacing,
    left?: boolean,
    right?: boolean,
    top?: boolean,
    bottom?: boolean,
    children: React.ReactNode
}

const Margin: React.FC<MarginProps> = ({ space = 'xxxs',children, left, right, top, bottom }) =>{
    let className = ``;

    if ( !left && !right && !top && !bottom){
        className = `dsyse-margin-${space}`;
    }

    if(left){
        className=`${className} dsyse-margin-left-${space}`
    }

    if(right){
        className=`${className} dsyse-margin-right-${space}`
    }

    if(top){
        className=`${className} dsyse-margin-top-${space}`
    }

    if(bottom){
        className=`${className} dsyse-margin-bottom-${space}`
    }

    return <div className={className}>
        {children}
    </div>
}

export default Margin;