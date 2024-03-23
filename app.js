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