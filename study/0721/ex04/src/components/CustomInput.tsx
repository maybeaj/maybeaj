import React,  { useRef, useImperativeHandle } from "react";

const CustomInput = React.forwardRef((props, ref) => { 
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus();
        },
        getValue: () => {
            return inputRef.current?.value;
        }
    }));

    return (<input ref={inputRef} />);
});

export default CustomInput;