import React from "react";
import ReactDOM from "react-dom/client";
// single element
const  heading = React.createElement("h1", {id:"Heading"}, "Hello, React "); 
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// nested elements
const parent = React.createElement("div", {id:"Parent"}, React.createElement("div", {id:"Child"}, React.createElement('h1', {id:"Heading"},"Hello, nested elements in React")));
// root.render(parent);


// sibling elements
const parent1 = React.createElement(
    "div", 
    {id:"Parent"}, 
    React.createElement("div", 
        {id:"Child"}, 
        [   React.createElement('h1', 
            {id:"Heading"},
            "Hello, nested elements in React"),
            React.createElement('h2', 
            {id:"Heading"},
            "Hello, sibling elements in React")
        ])
    );
// root.render(parent1);


// childs of siblings
const parent2 = React.createElement("div", 
    {id:"parent"},
    [
        React.createElement("div",
        {id:"child"},
        [
            React.createElement("h1",{},"Hello, first child elements in React"),
            React.createElement("h2",{}, "Hi, first grandchild elements in React"),
        ]),
        React.createElement("div", {id:"child2"},
        [   React.createElement("h1",{},"Hello, second child elements in React"),
            React.createElement("h2",{}, "Hi, second grandchild elements in React"),
        ])
    ]
)
root.render(parent2);

// when there is a tag in the root in html, when we render the parent element unlike the js the react will replace the tag with the react element.


// single line
const name = "Rifna"
const jsxHeading = <h1 id="Heading"> Hello {name} 🎉🤞</h1>
const root2 = ReactDOM.createRoot(document.getElementById("root"));

// multiline code;
function fullName(name) {
    return name.fName+ " " + name.lName;
}
const name1 ={
    fName:"Rifna",
    lName: "C"
}

const element = (
    <h1>
    Hello, {fullName(name1)}
    </h1>
);

// if statement
function fullName(name) {
    return name.fName+ " " + name.lName;
}

function getGreeting(name){
    if(name){
        return <h1>Hello, {fullName(name)}</h1>
    }else{
        return <h1>Hello, stranger</h1>
    }
}
const element1 = getGreeting(name);

// string attribute in jsx element ==> double quotes
const element2 = <a href="https://www.google.com">Google</a>;

// embedded js expression
const user = {
    avatarUrl: "https://avatars.githubusercontent.com/u/1476234?v=4"
}
const element3 = <img src={user.avatarUrl}></img>

// attribute in jsx element 
const element4 = <img className="avatar" tabIndex={9} src={user.avatarUrl}></img>

// like xml element
const element5 = <img src={user.avatarUrl}/>

// JSX tags may contain children:
const element6 = (<div>
    <h1>Hello, React</h1>
    <h2>Nice to meet you</h2>
</div>)

// prevention of xss
const title = response.potentiallyMaliciousInput;
// This is safe:
const element7 = <h1>{title}</h1>;
    
root.render(element7);


// ticking clock
function tick() {
    const element = (
        <div className="clock"> 
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    );
    root.render(element);
}

setInterval(tick,1000)