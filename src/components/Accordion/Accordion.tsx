import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: true | false
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed == true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {/*<AccordionBody body={<ul>*/}
                {/*    <li>1</li>*/}
                {/*    <li>2</li>*/}
                {/*    <li>3</li>*/}
                {/*</ul>}/>*/}
            </div>
        );
    }
    if (props.collapsed == false) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody body={<ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>}/>
            </div>
        );
    }
}


function AccordionTitle(props: any) {
    console.log("AccordionTitle rendering")
    return <h3>{props.titleValue}</h3>

}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return <div>{props.body}</div>
}

export default Accordion;