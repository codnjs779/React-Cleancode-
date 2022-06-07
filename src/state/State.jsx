import React, { useState, useEffect } from "react";

const State = () => {
  const [initNum, setInitNum] = useState(0);

  // Advanced
  const minusFunc = () => {
    setInitNum((initNum) => initNum - 1);
  };

  const plusFunc = () => {
    setInitNum((initNum) => initNum + 1);
  };

  // useEffect 의존성 배열을 사용해서 state가 변경 될 때마다 페이지가 로드 될 수 있도록 하는 것

  useEffect(() => {
    console.log(initNum);
  }, [initNum]);

  return (
    <div className="App">
      <button onClick={minusFunc}>삭제</button>
      <div>{initNum}</div>
      <button onClick={plusFunc}>추가</button>
    </div>
  );
};

export default State;
