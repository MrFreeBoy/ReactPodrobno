import React from "react";

function Accordion() {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={"Main Menu"} />
            <AccordionBody body={<ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>}/>
        </div>
    );
}

function AccordionTitle(props: any) {
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>

}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return <div>{props.body}</div>
}

export default Accordion;