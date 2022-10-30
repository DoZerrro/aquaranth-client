import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import TodoAdd from "@components/Todo/TodoAdd";
import TodoModify from "@components/Todo/TodoModify";
import TodoRead from "@components/Todo/TodoRead";
import TodoList from "./TodoList";

const Index = () => (
  <Switch>
    <Route path="/list" component={TodoList} />
    <Route path="/add" component={TodoAdd} />
    <Route path="/modify/:id" component={TodoModify} />
    <Route path="/read/:id" component={TodoRead} />
    <Route path="/">
      <Redirect to="/list" />
    </Route>
  </Switch>
);

export default Index;
