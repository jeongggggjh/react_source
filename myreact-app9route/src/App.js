import React from "react";
import MyTest from "./exam/Test";
import HiAbout from "./exam/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
        <Link to="/">Test화면</Link>&nbsp;
        <Link to="/about">About보기</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MyTest />}></Route> {/* 동적 라우팅을 구현 */}
        <Route path="/about" element={<HiAbout />}></Route>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
