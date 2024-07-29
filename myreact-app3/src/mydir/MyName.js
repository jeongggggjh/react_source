import React, { Component } from "react";

/*
class MyName extends Component {
    // static defaultProps = {
    //     name : '래시포드'
    // }

    render() {
        return(
            <div>
                ㅎㅇ~ 난 <b>{this.props.name}</b>
            </div>
        );
    }
}

MyName.defaultProps = {
    name : '래시포드'
}
*/

// 클래스를 함수로 소스 코드 변환 1
/*
function MyName(props) {
    return (
        <div>
            ㅎㅇ <b>{name}</b>
        </div>
    )
}
*/

// 클래스를 함수로 소스 코드 변환 2
const MyName = ({name}) => {
    return (
        <div>
            ㅎㅇ <b>{name}</b> 라고 한다 ㅇㅇ;
        </div>
    )
}

export default MyName;