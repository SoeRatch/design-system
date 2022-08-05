import React, { useState,useEffect,useRef } from "react";

import Text from "../../atoms/Text";

interface SelectOption {
    label: string,
    value: string
}




interface SelectProps {
    onOptionSelected: ( option:SelectOption, optionIndex:number )=> void,
    options?: SelectOption[],
    label?: string,
    renderOption?: ( props:renderOptionProps ) => React.ReactNode
}

const Select: React.FC<SelectProps> = ({ options=[],label="Please Select an option", onOptionSelected:handler }) =>{
    
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const labelRef = useRef<HTMLButtonElement>(null);
    const [overlayTop,setOverlayTop] = useState<number>(0);
    const [selectedIndex,setSelectedIndex] = useState<null|number>(null);

    const onOptionsSelected = (option:SelectOption,optionIndex:number)=>{
        

        if(handler){
                handler(option,optionIndex);
            }
        
            setSelectedIndex(optionIndex);

            setIsOpen(false);

    }

    const onLabelClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(()=>{

        setOverlayTop(
            (labelRef.current?.offsetHeight || 0) + 10
        )


    },[labelRef.current?.offsetHeight]);

    let selectedOption = null;

    if(selectedIndex!=null){
        selectedOption= options[selectedIndex];
    }

    return < div className='dsyse-select'>
        <button ref={labelRef} className='dsyse-select__label' onClick={() => onLabelClick()}>
            <Text>{selectedOption==null?label:selectedOption.label}</Text>

            <svg
                className={`dsyse-select__caret ${isOpen?'dsyse-select__caret--open':'dsyse-select__caret--closed'}`}
                width='1rem' height='1rem' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
        </button>

        {
            isOpen?
            (<ul style={{ top:overlayTop }} className='dsyse-select__overlay'>
                    {
                    options.map((option,optionIndex) =>{
                        const isSelected = selectedIndex === optionIndex;

                        

                        return <li 
                                    className={`dsyse-select__option
                                                ${isSelected? "dsyse-select__option--selected":""}
                                                `}
                                    onClick={()=> onOptionsSelected(option,optionIndex)}
                                    key={option.value}
                                    >
                                        <Text> {option.label}</Text>
                                        
                                        {
                                            isSelected?(
                                                <svg 
                                         width='1rem' height='1rem' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg>
                                            ):null

                                        }
                                        
                                        
                                </li>
                    })
                    }
            </ul>)
            :null
        }

        
    </div>;
}

export default Select;