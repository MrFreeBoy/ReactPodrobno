import React, {useState} from "react";

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType)=>void
}

function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")

    let [value, setValue] = useState<RatingValueType>(props.defaultValue? props.defaultValue:0);


    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1); props.onChange(1);}} />
            <Star selected={value > 1} setValue={()=>{setValue(1); props.onChange(2);}} />
            <Star selected={value > 2} setValue={()=>{setValue(1); props.onChange(3);}} />
            <Star selected={value > 3} setValue={()=>{setValue(1); props.onChange(4);}} />
            <Star selected={value > 4} setValue={()=>{setValue(1); props.onChange(5);}} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    // return props.selected ? <span><b>star</b></span> : <span>star </span>
    // Если selected равно true верни закрашеные span. Тернарное выражение вместо иф элс

    return <span onClick={() => {props.setValue()}}>{props.selected ? <b>star </b> : "star "}</span>

}


export default UncontrolledRating;



