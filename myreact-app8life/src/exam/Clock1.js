import React from "react";

class Clock1 extends React.Component {
    /*
    constructor(props) {
        super(props);
    };
    */
   
    render() {
        return(
            <div>
                <h1>ㅎㅇ</h1>
                <h2>지금은 {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock1;