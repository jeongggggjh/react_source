import React, {Component} from "react";

class Clock2 extends Component {
    // 클래스형 컴포넌트는 props로 기본 constructor를 호출해야 함
    constructor(props) {
        super(props)

        this.state = {date:new Date()} // state를 생성자에서 지정
    }

    // 마운트는 DOM 객체가 생성되고 브라우저에 나타나는걸 의미.
    // 마운트 메소드 호출 순서
    // 1. constructor : 컴포넌트 클래스의 생성자 함수로 컴포넌트를 만들 때 처음으로 호출되는 함수.
    // 2. getDerivedStateFromProps : props와 state 값을 동기화할 때 사용하는 함수.
    // 3. render : 컴포넌트의 기능과 모양새를 정의하는 함수로 리액트 요소를 반환.
    // 4. componentDidMount : 컴포넌트를 생성하고 첫 렌더링이 끝났을 때 호출되는 함수.

    showDate() {
        this.setState({
            date:new Date()
        })
    }
    // 컴포넌트 출력 자료가 DOM에 렌더링 된 후 실행되기 때문에 타이머 관련 작업을 하기에 적당.
    componentDidMount() { // 시스템에 의한 콜백
        // setInterval() : 어떤 코드를 일정 시간 간격을 두고 반복 호출 가능
        this.timerID = setInterval(
            () => this.showDate(),
            1000
        );
    }

    componentWillUnmount() { // 시스템에 의한 콜백
        // 사용된 메모리 등의 작업 마무리
        // SPA를 개발 할 때는 메모리 누수(leak)를 방지하는 작업 필요
        clearInterval(this.timerID); // setInterval() 해제
    }

    render() {
        return(
            <div>
                <h1>ㅎㅇ!</h1>
                <h2>아직도 {new Date().toLocaleTimeString()}</h2>
                <h2>현재 시간은 {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock2;