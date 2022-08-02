import React from "react";
import ReactDOM  from "react-dom";

import { Color,Image,Spacing } from "@dsys.e/react";

import "@dsys.e/scss/lib/Utilities.css";

ReactDOM.render(
    <div>
            <Color hexCode="#000" width={Spacing.lg} height={Spacing.lg}/>
            <Image 
                url="https://media.istockphoto.com/photos/young-man-shopping-online-picture-id1305615921?s=612x612" 
                height={Spacing.xxxl}
                width={Spacing.xxxl}/>
    </div>,
    document.querySelector('#root')
)
