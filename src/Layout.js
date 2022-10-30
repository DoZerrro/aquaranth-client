import React from "react";
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <div>
        <h1>header</h1>
        <Link to="/api/todo/list">Todo List</Link>
      </div>
      <div>
        {props.children}
      </div>
      <div>
        <h1>footer</h1>
      </div>
    </>
  );
}

export default Layout;
