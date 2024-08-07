import React, { Component } from 'react';

export default class RefSample3 extends Component {
    handleFocus = () => {
        console.log(this); // 컴포넌트 자기자신.
        console.log('this.inputRef >>> ', this.inputRef); // input 요소 그 자체
        this.inputRef.focus();
    };
    render() {
        return (
            <div>
                <p>
                    클래스형 컴포넌트에서 버튼 클릭시 input에 focusing
                    처리해보기!
                </p>
                {/* 만들어진 변수 inputRef 해당 요소의 ref prop로 넣어주면 ref 설정 완료. */}
                {/* ref 속성 */}
                {/* 1. 콜백 함수 */}
                <input
                    type="text"
                    ref={(elementRef) => {
                        this.inputRef = elementRef;
                    }}
                />
                {/* ref를 사용하려는 목적이 ? 요소 선택 */}
                {/* inputRef라는 변수를 만들어서 사용하려고! */}
                {/* elementRef 를 통해 input 태그와 연결 시켜주려함! */}
                <button onClick={this.handleFocus}>Focus</button>
            </div>
        );
    }
}