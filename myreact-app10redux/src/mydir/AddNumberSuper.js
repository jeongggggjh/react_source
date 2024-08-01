import React, {Component} from "react";
import AddNumber from "./AddNumber";

export default class AddNumberSuper extends Component {
    render() {
        return (
            <div id="super">
                <h1>AddNumberSuper</h1>
                {/* AddNumber의 props로 매개변수가 size인 함수를 전달.
                    이 함수는 AddNumber의 + 버튼을 클릭했을 때 AddNumber의
                    state.size 값을 호출.
                    이 size 값을 다시 상위 컴포넌트 App으로 전달해야 하기 때문에
                    상위 컴포넌트로부터 전달 받은 props의 onClick 함수를 호출 후, size 값을 전달해야 함.
                */}

                {/*
                <AddNumber onClick={function(size) {
                    this.props.onClick(size);
                }.bind(this)} />
                */}

                <AddNumber />
            </div>
        );
    }
}