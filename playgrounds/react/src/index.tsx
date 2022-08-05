import React from "react";
import ReactDOM  from "react-dom";

import { Color,Image,Text,Margin } from '@dsys.e/react';
import { Spacing } from "@dsys.e/foundation";

import "@dsys.e/scss/lib/Utilities.css";
import "@dsys.e/scss/lib/Text.css";
import "@dsys.e/scss/lib/Margin.css";
import "@dsys.e/scss/lib/global.css";


ReactDOM.render(
    <div>
        <Margin>
            <Text size='sm'> this is some text </Text>
        </Margin>
    </div>,
    


    document.querySelector('#root')
)
