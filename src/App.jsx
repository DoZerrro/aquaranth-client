import React from "react";
import { Route, Switch } from "react-router";
import Todo from "@components/Todo";

const App = () => {
  console.log("Test");
  return (
    <div>
      <Switch>
        {/* <Route path="/" component={IndexPage} /> */}
        <Route path="/" component={Todo} />
      </Switch>
    </div>
  );
};

export default App;
