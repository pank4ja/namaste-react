import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement  ==> ReactElement-js Object  ==> HTMLELement(render)

const heading = React.createElement("h1",{id: "heading"},"Namaste React using react");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
const elem = <span>React elem</span>

// JSX  (transcip before it reaches the js engine) done by parcel -babel
// JSX ==> React.createElement  ==> ReactElement-js Object  ==> HTMLELement(render)
// it's just end of the day react element
const jsxHeading = (
  <>
  {elem}
  <h1 id="heading" className="head">
  Namaste React using JSX
  </h1>
  </>
)  // js engine don't understand this code js engine can't understand this syntax

console.log(jsxHeading);
console.log(heading);
console.log(<h1>hello</h1>);

// root.render(jsxHeading);


// react component
// class based component - old
// functional component - new

// react functional comp
const HeadingCompnent = () => <h1>Namaste React functional compoent</h1> ;

const HeadingCompnent2 = () => (
 <h1 className="heading">Namaste React functional compoent</h1>
);

const HeadingCompnent3 = () => {
  return <h1 className="heading">Namaste React functional compoent</h1>;
}

const number = 1000;


const MainComponent = () => (
  <div id="container">
    <Title />
    {number}
    <h2>{300 + 400}</h2>
    {console.log("hello bhai ")}
    {jsxHeading} {/* we inserted react element inside a component */}
    {/* <Title />  this is call compoent composition */}
    <h1 className="heading">Namaste React functional compoent</h1>
  </div>
);

const Title = () => (
  <h1 className="head3">
    namaste heading title
  </h1>
)

// root.render(<MainComponent />);

// can also write like this
function MainCompo() {
  return (
    <div id="container">
    <h1 className="heading">Namaste React functional compoent</h1>
  </div>
  )
};



// element ke andar compnent as well as element
const elem2 = (
  <>
  {MainCompo()}
  {/* {MainCompo()}  we can also do it like this  */}
    {elem}
    <span>iske anader me ek compo dal dunga</span>
    <MainCompo/>
  </>
);

root.render(elem2);