const heading = React.createElement("div",{id:"Parent"},
    [React.createElement("div",{id:"child1"},
        [
            React.createElement("h1",{id:"h1"},"Heading 1 Child 1"),
            React.createElement("h2",{id:"h2"},"Heading 2 Child 1")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [
           React.createElement("h1",{id:"h1c2"},"Heading 1 Child 2"),
           React.createElement("h2",{id:"h2c2"},"Heading 2 Child 2") 
        ]
    )]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);