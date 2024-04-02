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

setInterval(tick,1000);


// functional component 
const FunctionalComponent = () =>{
    return <h1>Hello, React</h1>
}

const FunctionalComponent2 = () =>(<h1>Hello, React2</h1>);
root.render(<FunctionalComponent />)

// component  composition
const FunctionalComponent1 = () =>( <h1 className="heading">Hello, React</h1>)


const FunctionalComponent3 = () =>( 
   <div>
        <FunctionalComponent1 />
        <h2>Hello, React2</h2>
    </div>
   
);

root.render(<FunctionalComponent3 />)

// composing components
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}

function Greet(){
    return <div>
        <Welcome name="Rifna"/>
        <Welcome name="Fahad"/>
        <Welcome name="Sara"/>
        <Welcome name="Nadia"/>
    </div>
}
root.render(<Greet  />);


// component  using elment
const elemen =( <h1 className="heading">Hello, React!!!!!!!</h1>)


const Component2 = () =>( 
   <div>
        {elemen}
        <h2>Hello, React2</h2>
    </div>
   
);
root.render(<Component2 />)



// ways calling component inside another component 
const Title =()=>( <h1 className="heading">Hello, React!!!!!!!</h1>)


const Comp = () =>( 
   <div>
        <Title /> == <Title></Title>  == {Title()}
        <h2>Hello, React2</h2>
    </div>
   
);

root.render(<Comp />);

// function component
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}
root.render(<Welcome  />);

// class component
class Wel extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>
    }
}

root.render(<Wel name="Rifna" />);


// Extracting Components
function formatDate(date) {
    return date.toLocaleDateString();
 }
 
const Avatar =(props) =>(<img className="avatar" src={props.author.avartarUrl} alt={props.author.name}/>);
const UserInfo = (props) => (
    <div className="userInfo">
        <Avatar author={props.author} />
        <div className="userInfo-name">
        {props.author.name}
        </div>
    </div>
);
function Comment(props) {return  <div className="comment">
    <UserInfo author={props.author} />
    <div className="comment-text">
        {props.text}
    </div>
    <div className="comment-date">
    {formatDate(props.date)}
    </div>
</div>
};

const obj ={
    author:{
        name:"Rifna",
        avartarUrl:"https://pics.com/1"
    },
    text:"Hello, Let's learn React Guysss", 
    date:new Date(),
}

root.render(<Comment author={obj.author}  date={obj.date} text={obj.text} />)

// pure function
function sum(a,b){
    return a + b;
}

// impure function
function impureSum(a,b){
    return a += b;
}

// props and propTypes
import PropTypes from 'prop-types';

export const Sample = (props) => (<div className="student">
    <div style={{border:" 1px solid", padding:"0px 80px", margin:"8px 16px"}}>
        <h3>Name: {props.name}</h3>
        <p>Age: {props.age}</p>
        <p>isSingle: {props.isSingle ? "Yes": "No"}</p>
    </div>
</div>);

Sample.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isSingle: PropTypes.bool,

}
Sample.defaultProps = {
    name: "Student",
    age:0,
}

