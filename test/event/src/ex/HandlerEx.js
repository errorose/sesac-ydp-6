import React, { Component } from 'react'

export class HandlerEx extends Component {
    constructor(){
        super();

        this.state = {
            msg: 'Hello World!',
        }
    }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={()=>{this.setState({msg: 'Goodbye World!'})}}>클릭</button>
      </div>
    )
  }
}

export default HandlerEx