import React, { useState } from "react";

function TodoList({items}) { // 할 일 목록 출력용
  return (
    <ul>
      {items.map((item) =>(
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.length === 0) {
      return;
    }

    const newItems = {
      text:text,
      id:Date.now(),
    };

    setItems((prevItems) => [...prevItems, newItems]);
    setText('');
  }

  return (
    <div className="App">
      <h3>오늘 할 일</h3>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">할 일</label>&nbsp;&nbsp;
        <input id="todo" onChange={handleChange} value={text} />
        &nbsp;&nbsp;
        <button>클릭 #{items.length + 1}</button>
      </form>
    </div>
  );
}

export default App;
