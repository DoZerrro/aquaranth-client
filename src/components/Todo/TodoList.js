import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import request from "@utils/axiosUtil";
import Layout from "../../Layout";

const todoList = async () => {
  const { data } = await request.get("/todo/list");
  return data;
};

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    todoList().then((data) => {
      setTodos(data);
    });
  }, []);

  const clickHandler = () => {
    history.push("/add");
  };

  const readHandler = (tno) => {
    history.push(`/read/${tno}`);
  };

  return (
    <Layout>
      <div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={clickHandler}>INSERT</button>
      </div>
      <ul>
        {todos?.map(({
          tno, title, memo, dueDate, complete,
        }) => (
          <li key={tno}>
            [
            {title}
            ] --
            {memo}
            {" "}
            (
            {dueDate}
            {" "}
            |
            {complete ? "DONE" : "NOT YET"}
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={() => readHandler(tno)}>READ</button>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TodoList;
