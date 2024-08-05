import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        count: 0,
    }

  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>Class Component State</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{
            this.setState({count : count + 2});
        }}>+2</button>
        <button onClick={()=>{
            this.setState({count : count - 1});
        }}>-1</button>
      </div>
    )
  }
}
