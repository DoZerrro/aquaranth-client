import React, { useEffect, useState } from "react";
import request from "@utils/axiosUtil";
import { useParams } from "react-router-dom";

const todoPageList = async ({ page, size }) => {
  const { data } = await request.get(`http://localhost:8080/api/todo/paging?page=${page}&size=${size}`);
  return data;
};

const initState = {
  start: 1,
  end: 10,
  prev: false,
  next: false,
  total: 0,
  todoList: []
};

function TodoPaging(props) {
  const [list, setList] = useState(initState);
  const page = 2;
  const size = 10;
  useEffect(() => {
    todoPageList({ page, size }).then((data) => {
      console.log("data-------", data);
      setList(data);
      console.log("list--------", list);
    });
  }, []);

  return (
    <div>
    </div>
  );
}

export default TodoPaging;
