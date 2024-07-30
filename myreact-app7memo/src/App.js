import React, { useState } from "react";
import Child from "./mydir/Child";

function App() {
  // App 컴포넌트(함수)가 호출 될 때 함수 내의 내용을 차례대로 수행(렌더링) 
  // 리액트는 부모 컴포넌트가 렌더링 될때 자식 컴포넌트 또한 렌더링.
  
  const [fatherAge, setFatherAge] = useState(60);
  const [childAge, setChildAge] = useState(3);

  const changeFatherAge = () => { // 아빠 나이 변경 이벤트 핸들러
    setFatherAge(fatherAge - 1);
  }

  const changeChildAge = () => { // 자식 나이 변경 이벤트 핸들러
    setChildAge(childAge + 1);
  }

  console.log('아빠 나이 변경 - 렌더링');
  
  const boxstyle = {border : '2px solid', padding : '10px'}
  return (
    <div style={boxstyle}>
      <h2>☺️ 아빠</h2>
      <span>나이 : {fatherAge}</span>&nbsp;&nbsp;
      <button onClick={changeFatherAge}>아빠 나이 변경</button>
      <hr />
      <Child irum={'우동'} nai={childAge}/>
      <button onClick={changeChildAge}>자식 나이 변경</button>
    </div>
  );
}

export default App;
