import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import request from "@utils/axiosUtil";

const todoInsert = async (todo) => {
  const { data } = await request.post("/todo/add", todo);
  return data;
};

const initState = {
  title: "",
  memo: "",
  dueDate: "",
};

const TodoInsert = () => {
  const [todo, setTodo] = useState(initState);
  const history = useHistory();

  const changeHandler = (name, value) => {
    todo[name] = value;
    setTodo({ ...todo });
    console.log(todo);
  };

  const clickHandler = () => {
    todoInsert(todo).then(() => {
      history.push("/list");
    });
  };

  return (
    <>
      <div>
        Title :
        {" "}
        <input type="text" name="title" onChange={(e) => { changeHandler("title", e.target.value); }} />
      </div>
      <div>
        Memo :
        {" "}
        <input type="text" name="memo" onChange={(e) => { changeHandler("memo", e.target.value); }} />
      </div>
      <div>
        DueDate :
        {" "}
        <input type="date" name="dueDate" onChange={(e) => { changeHandler("dueDate", e.target.value); }} />
      </div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={clickHandler}>INSERT</button>
    </>
  );
};

export default TodoInsert;
