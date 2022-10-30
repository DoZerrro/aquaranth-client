import React, { useEffect, useState } from "react";
import request from "@utils/axiosUtil";
import { useParams } from "react-router-dom";

const todoPageList = async ({ page, size }) => {
  const { data } = await request.get(`http://localhost:8080/api/todo/paging?page=${page}&size=${size}`);
  return data;
};

const initState = {
  dtoList: [],
  end: 10,
  next: true,
  pageRequestDTO: {
    page: 1, size: 10, skip: 0
  },
  prev: false,
  start: 1,
  total: 0
};

function TodoPaging(props) {
  const [list, setList] = useState(initState);
  const page = 1;
  const size = 10;

  useEffect(() => {
    todoPageList({ page, size }).then((data) => {
      console.log("data-------", data);
      setList({ ...data });
    });
  }, []);

  return (
    <>
      <div>
        {list.dtoList.map(({ tno, title }) => <li key={tno}>{title}</li>)}
      </div>
    </>
  );
}

export default TodoPaging;
