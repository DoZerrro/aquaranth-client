import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import request from "@utils/axiosUtil";

const getTodo = async (id) => {
  const { data } = await request.get(`/todo/read/${id}`);
  return data;
};

const updateTodo = async (todo) => {
  const { data } = await request.put(`/todo/modify/${todo.tno}`, todo);
  return data;
};

const initState = {
  tno: 0,
  title: "",
  memo: "",
  dueDate: "2022,10,20",
  complete: false,
};

const TodoMod = (props) => {
  const { id } = useParams();

  const [todo, setTodo] = useState(initState);

  const history = useHistory();

  useEffect(() => {
    getTodo(id).then((data) => {
      setTodo(data);
    });
  }, [id]);

  const changeTodo = (prop, value) => {
    todo[prop] = value;
    setTodo({ ...todo });
    console.log("", todo);
  };

  const completeHandler = (prop, value) => {
    console.log(value);
    // console.log(value)
    // todo[prop] = value
    // setTodo({...todo})
    // console.log('', todo)
  };

  const updateClickHandler = () => {
    updateTodo(todo).then(() => {
      history.replace("/list");
    });
  };

  return (
    <div>
      <div>
        <h1>{todo.tno}</h1>
      </div>
      <div>
        Title :
        {" "}
        <input value={todo.title} onChange={(e) => { changeTodo("title", e.target.value); }} />
      </div>
      <div>
        Memo :
        {" "}
        <input value={todo.memo} onChange={(e) => { changeTodo("memo", e.target.value); }} />
      </div>
      <div>
        DueDate :
        {" "}
        <input value={todo.dueDate} type="date" onChange={(e) => { changeTodo("dueDate", e.target.value); }} />
      </div>
      <div>
        Complete :
        {" "}
        <input type="checkbox" checked={todo.complete} onChange={(e) => { changeTodo("complete", e.target.checked); }} />
      </div>
      <div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => { updateClickHandler(); }}>UPDATE</button>
      </div>
    </div>

  );
};

export default TodoMod;
