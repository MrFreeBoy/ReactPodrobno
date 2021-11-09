import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div className="App">

            <PageTitle title={"This Project is my first try to programming on React"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
