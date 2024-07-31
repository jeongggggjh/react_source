import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MyTest from "./exam/Test";
import HiAbout from "./exam/About";
import Counter from "./exam/Counter";
import Input1 from "./exam/Input1";
import Input2 from "./exam/Input2";
import Multidata from "./exam/Multidata";
import MyAjax from "./exam/MyAjax";


function App() {
  return (
    <Router>
    <div className="App">
      <h2>라우트 연습용 메인 화면</h2>
      <MyTest />
      
      <hr />
      {/* 메뉴 작성 : 라우팅 연습 */}
      <nav>
        {/* Link는 a tag로 전환 : 요청명 개념으로 이해 */}
        <Link to="/">Test화면</Link>&nbsp;&nbsp;
        <Link to="/about">About보기</Link>&nbsp;&nbsp;
        <Link to="/count">친구추가삭제</Link>&nbsp;&nbsp;
        <Link to="/input1">자료입력1</Link>&nbsp;&nbsp;
        <Link to="/input2">자료입력2</Link>&nbsp;&nbsp;
        <Link to="/multidata">배열자료</Link>&nbsp;&nbsp;
        <Link to="/myajax">Ajax 요청</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MyTest />}></Route> {/* 동적 라우팅을 구현 */}
        <Route path="/about" element={<HiAbout />}></Route>
        <Route path="/count" element={<Counter />}></Route>
        <Route path="/input1" element={<Input1 />}></Route>
        <Route path="/input2" element={<Input2 />}></Route>
        <Route path="/multidata" element={<Multidata />}></Route>
        <Route path="/myajax" element={<MyAjax />}></Route>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
