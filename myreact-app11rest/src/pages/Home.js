import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>메인</h1>
            <h2>공지사항</h2>
            <ul>
                <li>
                    <Link to="/member">회원목록</Link>
                </li>
            </ul>
        </>
    )
}