import React, { useEffect, useState, useMemo } from "react";

const Effect = () => {
  const [theme, setTheme] = useState(false);
  const [data, setData] = useState("");
  const userDataFunc = (e) => {
    setData(e.target.value);
    console.log("data", data);
  };

  const buttonStyle = {
    backgroundColor: theme ? "red" : "yellow",
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  // pro 방법 memo까지 씀 => 이유는? input 값이 바뀔 때 렌더링 되지 않아도 될 컴포넌트가 리렌더링 되는 상황을 막아주기 위함

  const user = useMemo(() => {
    return data;
  }, [data]);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  // advanced 방법
  //   useEffect(() => {
  //     console.log("user", data);
  //   }, [data]);

  return (
    <div>
      <input value={data} placeholder="clean code" onChange={userDataFunc}></input>
      <button onClick={changeTheme} style={buttonStyle}>
        toggle theme
      </button>
    </div>
  );
};

export default Effect;
