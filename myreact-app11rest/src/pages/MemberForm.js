import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberForm() {
    const navigate = useNavigate();
    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    // 추가 버튼 클릭에 대한 이벤트 핸들러
    const handleSave = () => {
            // Ajax 요청 (POST 방식)
            axios.post("/member", state)
            .then(res => {
                if(res.data.isSuccess) {
                    alert("추가 성공")
                    navigate("/member") // 추가 후 목록보기
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        <>
            <h2>* 회원 입력 *</h2>
            <input onChange={handleChange} type="text" name="name" placeholder="이름 입력" />
            <br />
            <input onChange={handleChange} type="text" name="addr" placeholder="주소 입력" />
            <br />
            <button onClick={handleSave}>추가</button>
        </>
    )
}