import React from "react";
import ReactDOM  from "react-dom";

import { Color,Image,Text,Margin,Select } from '@dsys.e/react';
import { Spacing } from "@dsys.e/foundation";

import "@dsys.e/scss/lib/Utilities.css";
import "@dsys.e/scss/lib/Text.css";
import "@dsys.e/scss/lib/Margin.css";
import "@dsys.e/scss/lib/Select.css";
import "@dsys.e/scss/lib/global.css";

const option =[

    {
        label:'Strict Black',
        value:'strict-black'
    },
    {
        label:'Heavenly Green',
        value:'heavenly-green'
    },
    {
        label:'Sweet Pink',
        value:'sweet-pink'
    }
];


ReactDOM.render(
    <div style={{padding:'40px'}}>
        <Select options={option}  />
        {/* <Select options={option} renderOption={({option,getOptionRecommendedProps})=><p {...getOptionRecommendedProps()}>{option.label}</p>} /> */}
    </div>,
    


    document.querySelector('#root')
)
