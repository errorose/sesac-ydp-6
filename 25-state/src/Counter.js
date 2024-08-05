import React, { Component } from 'react'

export default class Counter extends Component {
    // React 16.3 버전 이전 형태.
    // constructor(props) {
    //     // 주로 초기 상태를 설정.
    //     // 'props'를 부모 컴포넌트에서 받아와 사용하기 위함.
    //     // js에서 'super'는 부모 클래스 생성자의 참조. (호출)
    //     // super() 호출 시 현재 클래스가 상속 받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출한다.
    //     super(props);
    //     // this.props를 사용할 수 있도록 설정.
    //     // 호출하지 않으면, this 키워드 사용 불가.

    //     this.state = {
    //         count : 0, // 초기 상태 설정.
    //     }
    // }
    // 현재 버전
    state = {
        count : 0,
    }

  render() {
    // 방법 #2
    const {count} = this.state;
    return (
      <div>
        <h1>Class Component State</h1>
        {/* 방법 #1 */}
        <h1>{this.state.count}</h1>
        {/* 방법 #2 */}
        <h1>{count}</h1>

        {/* 값 변경하기 */}
        <button onClick={() => {
            this.setState({count : count + 1});
        }}>+1</button>
        <button onClick={() => {
            alert(count);
        }}>Alert Number</button>
      </div>
    )
  }
}