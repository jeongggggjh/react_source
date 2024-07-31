import React from "react";

const Member = ({memberData}) => {
    return(
        <tr>
            <td>{memberData.irum}</td>
            <td>{memberData.tel}</td>
        </tr>
    );
}

// 메인 컴포넌트
const Multidata = () => {
    const members = [
        {irum : '래시포드', tel:'111-1111'},
        {irum : '마이누', tel:'222-1111'},
        {irum : '브페', tel:'333-1111'}
    ];

    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>이름</th><th>전화</th>
                </tr>
            </thead>
            <tbody>
                 {/* 배열 렌더링시 각 요소에 고유 key 추가 */}
                {members.map((mem, index) => (
                    <Member key={index} memberData={mem} />
                ))}
            </tbody>
        </table>
    );
}

export default Multidata;