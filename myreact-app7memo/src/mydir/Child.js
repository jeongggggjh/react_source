import React, { memo } from "react";

const boxstyle = {border : '1px solid pink', padding : '20px'}

// function Child({irum, nai}) {...}
const Child = ({irum, nai}) => {
    console.log('자식 나이 변경 (렌더링)');

    return (
        <div style={boxstyle}>
            <h3>😉 자녀 1</h3>
            <p>이름 : 정재형</p>
            <p>나이 : 27</p>
            <h3>😉 자녀 2</h3>
            <p>이름 : {irum}</p>
            <p>나이 : {nai}</p>
        </div>
    );
}

// export default Child;
export default memo(Child); // 반환 컴포넌트를 memo함수로 감싸주면 memo 기능 활성화