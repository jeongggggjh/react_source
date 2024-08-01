import { legacy_createStore as createStroe } from "redux";

// 리듀서함수 : 애플리케이션 상태를 변환하는 함수 : A상태 -> B상태
// state와 action을 전달받아 상태를 변환 후 반환
// 작업 1) action 타입 분석
// 작업 2) 이전 상태를 다음 상태로 교체
// 작업 3) 다음 상태 반환

// createStore(리듀서함수)

export default createStroe(function(state, action) {
    // state : 데이터
    // action : 데이터에 가해지는 행위
    if(state === undefined) {
        return {number:0} // number 초기화
    }
    if(action.type === 'INCREMENT') {
        return {...state, number:state.number + action.size}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE && window.__REDUX_DEVTOOLS_EXTENSION__())

// createStore 두번째 매개변수는 REDUX_DEVTOOLS를 사용하기 위한 지정값.