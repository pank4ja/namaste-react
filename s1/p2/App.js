import React from "react";
import ReactDOM from "react-dom/client"


const parent = React.createElement(
  "div",
  { id: "parent" },
   [React.createElement("div",{id: "child"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag")
  ]),
    React.createElement("div",{id: "child"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag")
  ])]
);

//console.log(parent);


// const heading = React.createElement("h1",{id: "heading", xyz: "abc", aim: "to give attribute"},"hello world from react");

// console.log(heading);  // this is an object a react element basically objects


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// conclusion we can render multiple 
root.render(parent);

const kaam = React.createElement("h4",{},"bhai me 2nd render hun testing");
const root2 = ReactDOM.createRoot(document.getElementById("test"));

root2.render(kaam);