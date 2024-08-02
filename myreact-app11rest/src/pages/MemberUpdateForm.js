import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm() {
    // "/member/:num/edit" num 값 읽기
    const {num} = useParams();

    // 수정 할 정보 state로 관리 
    const [state, setState] = useState({
        num:0,
        name:"",
        addr:""
    });

    useEffect(() => {
        // Ajax 요청 (GET 방식)
        axios.get("/member/" + num) 
        .then(res => {
            // 서버로부터 응답된 데이터를 이용해서 state를 수정
            // res.data는 {num:1, name:"래시포드", addr:"맨체스터"}
            setState(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [num])

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const navigate = useNavigate();

    // 수정 버튼 클릭에 대한 이벤트 핸들러
    const handleSave = () => {
            // Ajax 요청 (PUT 방식)
            axios.put("/member/" + num, state)
            .then(res => {
                    navigate("/member") // 수정 후 목록보기
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <h2>정보 수정</h2>
            <div>
                <label>이름 : </label>
                <input type="text" name="name" onChange={handleChange} />
            </div>
            <div>
                <label>주소 : </label>
                <input type="text" name="addr" onChange={handleChange} />
            </div>
            <button onClick={handleSave}>수정 확인</button>
        </>
    )
}