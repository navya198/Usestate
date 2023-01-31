/*import React from "react"
import ReactDOM from "react-dom/client"
const Greeting=()=>{
    return(<div>
        <booklist>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>            
        </booklist>
    </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root')).render(<Greeting/>)
export default Greeting;*/
/*import React from "react";
import ReactDOM from "react-dom/client";
const Greeting = () => {
    return <h2>My First Component</h2>;
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting/>);
export default Greeting;*/


/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
function Index() {
  return (
    <div>
      <h1>This is app</h1>
      <App></App>
    </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index/>);
export default Index;*/
/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { useState } from "react";
function Index(){
  let message="coming from root App2.js";
  const handleClick = () => {
    console.log("click");
    setCount(count+1);
  };
  const [count,setCount] = useState(0);
  return (
    <div>
       <h2>This is App2</h2>
       <App message={message}></App>
       <App></App>
       <button onClick={handleClick}>clicked {count} times</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
export default Index;*/
/*import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);*/
/*import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./index.css";
const Greeting = () => {
  const[count,setCount]=useState(0);
  const handleClick = ()=>{
    console.log("clicked");
    setCount(count+1);
  };
return(
  <div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  </div>
)
};
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);







