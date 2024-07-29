import React, { useState } from "react";
import Subject from "./mydir/Subject";

// const App = () => {
function App() {
  const [subject, setSubject] = useState({title : '웹문서', subtitle : '리액트'});
  const [friends] = useState([
    {bun : 1, irum : '래시포드', nai : 27},
    {bun : 2, irum : '마이누', nai : 19}
  ]);

  const handleChangePage = () => {
    // friends 배열값 콘솔에 출력
    friends.forEach(friend => {
      console.log(`${friend.bun}번 ${friend.irum} 나이는 ${friend.nai}`)
    });
    setSubject(prevSubject => ({ // 이전 상태인 prevSubject(subject)을 받아 변환 
      ...prevSubject, 
      title : '버튼에 의해 제목 변경'
    }));
  }

  return (
    <div className="App">
      이벤트 연습<br />
      <Subject 
        title = {subject.title}
        subtitle = {subject.subtitle}
        onChangePage = {handleChangePage}
      />
      {/* onChangePage : App에서 Subject컴포넌트로 전달되는 이벤트 핸들러 */}
    </div>
  );
}

export default App;
