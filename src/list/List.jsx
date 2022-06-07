import React, { useState } from "react";
import initialTodos from "./nameData";
const List = () => {
  const [todos, setTodos] = useState("");
  const [selected, setSelected] = useState("");

  const clickItem = (item) => {
    console.log("e", item);
  };

  return (
    <>
      <ul>
        {initialTodos.map((item) => {
          return (
            <li style={{ listStyle: "none" }}>
              <input key={item.id} type="radio" onChange={clickItem(item)}></input>
              {item.name}
            </li>
          );
        })}
      </ul>

      <div>{selected}</div>
    </>
  );
};

export default List;
