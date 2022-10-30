import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import request from "@utils/axiosUtil";

const todoRead = async (tno) => {
  const { data } = await request.get(`/todo/read/${tno}`);
  return data;
};

// eslint-disable-next-line no-return-await
const todoDelete = async (tno) => await request.delete(`/todo/delete/${tno}`);

const initState = {
  tno: 0,
  title: "",
  memo: "",
  dueDate: "",
  complete: false,
};

const TodoRead = () => {
  const [todo, setTodo] = useState(initState);

  const { id } = useParams();
  const history = useHistory();
  console.log(id);
  useEffect(() => {
    todoRead(id).then((list) => {
      setTodo(list);
      console.log(todo);
    });
  }, []);

  const clickHandler = () => {
    todoDelete(id).then(() => {
      history.replace("/list");
    });
  };

  const modClickHandler = () => {
    history.push(`/modify/${id}`);
  };

  return (
    <div>
      <h1>{todo.tno}</h1>
      <h2>
        Title :
        {todo.title}
      </h2>
      <h2>
        Memo :
        {todo.memo}
      </h2>
      <h3>
        DueDate :
        {todo.dueDate}
      </h3>
      <h3>
        Complete :
        {todo.complete ? "DONE" : "NOT YET"}
      </h3>
      <div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={clickHandler}>DELETE</button>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={modClickHandler}>MODIFY</button>
      </div>

    </div>
  );
};

export default TodoRead;
