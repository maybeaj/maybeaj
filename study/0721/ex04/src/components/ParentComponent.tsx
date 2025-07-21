import React, { useRef } from "react";
import CustomInput from "../components/CustomInput";    


export interface CustomInputHandle {
    focus: () => void;
    clear: () => void;
}

export default function ParentComponent() {
    const inputRef = useRef<CustomInputHandle>(null);

    return (
        <div>
            <h2>Custom Input Example</h2>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current?.focus()}>포커스</button>
            <button onClick={() => inputRef.current?.clear()}>입력초기화</button>
        </div>
    );
}