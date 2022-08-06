import React, { useState,useEffect,useRef, KeyboardEventHandler } from "react";

import Text from "../../atoms/Text";

const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40
}

interface SelectOption {
    label: string,
    value: string
}

interface renderOptionProps {
    isSelected: boolean,
    option: SelectOption,
    getOptionRecommendedProps: ( overrideProps?: Object ) => Object

}


interface SelectProps {
    onOptionSelected: ( option:SelectOption, optionIndex:number )=> void,
    options?: SelectOption[],
    label?: string,
    renderOption?: ( props:renderOptionProps ) => React.ReactNode
}

const Select: React.FC<SelectProps> = ({ options=[],label="Please Select an option", onOptionSelected:handler,renderOption }) =>{
    
    const [isOpen,setIsOpen] = useState<boolean>(false);

    const labelRef = useRef<HTMLButtonElement>(null);

    const [optionRefs,setOptionRefs] = useState<React.RefObject<HTMLLIElement>[]>([]);

    const [overlayTop,setOverlayTop] = useState<number>(0);

    const [selectedIndex,setSelectedIndex] = useState<null|number>(null);

    const [highlightedIndex,setHighlightedIndex] = useState<null|number>(null);

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


    const highlightItem = (optionIndex: number|null) => {
        setHighlightedIndex(optionIndex);
    }


    const onButtonKeyDown: KeyboardEventHandler = (event) => {
        event.preventDefault(); 

        if(event.keyCode!==undefined){
            if([ KEY_CODES.SPACE, KEY_CODES.ENTER, KEY_CODES.DOWN_ARROW ].includes(event.keyCode)){
                setIsOpen(true);
            }
        }

        else if(event.key!==undefined){
            if(['Space','Enter','ArrowDown'].includes(event.key)){
                setIsOpen(true);
            }
        }
        

        // set focus on the list item 
        highlightItem(0)
        
    }


    useEffect(()=>{

        setOptionRefs(options.map(_ => React.createRef<HTMLLIElement>()));

    },[options.length]);

    
    useEffect(()=>{

        if( highlightedIndex!==null && isOpen){
            const ref = optionRefs[highlightedIndex];

            if(ref && ref.current){
                ref.current.focus();
            }
        }

    },[isOpen]);


    return < div className='dsyse-select'>
        <button 
            aria-haspopup={true}
            aria-expanded={isOpen? true:undefined} 
            aria-controls='dsyse-select-list'
            ref={labelRef} 
            className='dsyse-select__label' 
            onClick={() => onLabelClick()}
            onKeyDown={onButtonKeyDown}>
                <Text>{selectedOption==null?label:selectedOption.label}</Text>

                <svg
                    className={`dsyse-select__caret ${isOpen?'dsyse-select__caret--open':'dsyse-select__caret--closed'}`}
                    width='1rem' height='1rem' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
        </button>

        {
            isOpen?
            (<ul 
                role='menu'
                id='dsyse-select-list' 
                style={{ top:overlayTop }} 
                className='dsyse-select__overlay'>
                    {
                    options.map((option,optionIndex) =>{
                        const isSelected = selectedIndex === optionIndex;
                        const isHighlighted = highlightedIndex === optionIndex;

                        const ref = optionRefs[optionIndex];

                        const renderOptionProps = {
                            option,
                            isSelected,
                            getOptionRecommendedProps:(overrideProps={})=>{return {
                                            ref,
                                            tabIndex: isHighlighted ? -1 : 0,
                                            onMouseEnter: () => highlightItem(optionIndex),
                                            onMouseLeave: () => highlightItem(null),
                                            className:`dsyse-select__option ${isSelected?"dsyse-select__option--selected":""}
                                            ${isHighlighted?"dsyse-select__option--highlighted":""}
                                            `,
                                            key:option.value,
                                            onClick:()=> onOptionsSelected(option,optionIndex),
                                            
                                            ...overrideProps
                                        }}
                        }

                        if (renderOption){
                            return renderOption(renderOptionProps);
                        }

                        return <li           
                                    {...renderOptionProps.getOptionRecommendedProps()}
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