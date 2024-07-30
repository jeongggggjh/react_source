import { useState, useEffect } from "react";

const Clock3 = () => {
    // useState로 state를 초기화
    const [date, setDate] = useState(new Date());

    // useEffect를 사용하면 내부적으로 생명주기 메소드 처리. 
    useEffect(() => {
        // 클래스의 componentDidMount()를 아래처럼 기술
        const timerID = setInterval(() => showDate(), 1000);

        // 클래스의 componentWillUnMount()를 아래처럼 기술
        return () => {
            clearInterval(timerID);
        }
        
    }, []);

    const showDate = () => {
        setDate(new Date());
    }

    return(
        <div>
            <h1>ㅎㅇ!!!!!!</h1>
            <h2>도대체 왜 {new Date().toLocaleTimeString()}</h2>
            <h2>집에 갈래 {date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock3;