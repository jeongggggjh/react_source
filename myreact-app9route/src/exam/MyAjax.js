import React, {useState, useEffect} from "react";

const MyAjax = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // fetch를 이용해 jsp 자료(Apache server) 읽기
    // ajax 처리 성공시 isLoaded, items 갱신

    useEffect(() => {
        fetch("/wreact/abc.jsp", {method:'GET'})
        .then(res => {
            if(!res.ok) {
                throw new Error('network response was not ok')
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.items)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    // error가 나면 에러 메세지를, isLoaded가 false면 로딩 메세지
    // 그 외에는 items를 출력(렌더링)
    if(error) {
        return <div>에러 : {error.message}</div>
    } else if(!isLoaded) {
        return <div>자료 수신 중,,,</div>
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li>
                        {item.code} {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    } 
}

export default MyAjax;