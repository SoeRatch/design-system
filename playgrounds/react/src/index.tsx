import React from "react";
import ReactDOM  from "react-dom";

import { Color,Spacing } from "@dsys.e/react";

import "@dsys.e/scss/lib/Utilities.css";

ReactDOM.render(
    <Color hexCode="#000" width={Spacing.lg} height={Spacing.lg}/>,
    document.querySelector('#root')
)
