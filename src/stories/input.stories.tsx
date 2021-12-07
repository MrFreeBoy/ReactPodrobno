import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',
    //component: ,
};

export const UnControlledInput = () => <input/>;
export const TrackValueUnControlledInput = () => {
    const [value, setValue] = useState("");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }

    return <><input onChange={onChange}/> - {value} </>
}

export const GetValueOfUnControlledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <><input ref={inputRef} id={"inputID"}/>
        <button onClick={save}
        >save
        </button>
        - actual value: {value} </>
}

export const ControlledInput = () => {
    const [parentValue, setParenValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{setParenValue(e.currentTarget.value)}

    return <input value={parentValue} onChange={onChange}/>
};

export const ControlledCheckbox = () => {

    const [parentValue, setParenValue] = useState(true);

    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{setParenValue(e.currentTarget.checked)}

    return <input type="checkbox" checked={parentValue} onChange={onChange}/>

};

export const ControlledSelect = () => {

    const [parentValue, setParenValue] = useState<string | undefined>(undefined);

    const onChange = (e: ChangeEvent<HTMLSelectElement>)=>{setParenValue(e.currentTarget.value)}

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"2"}>Omsk</option>
        </select>
};


export const ControlledInputWithFixedValue = () => <input value={"it-huiti"}/>

