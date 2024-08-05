import React, { Component } from 'react'

export default class HandlerEx3 extends Component {
    constructor(){
        super();

        this.state = {
            text: '안녕하세요',
        }

        const hiddenText = ()=>{
            console.log('hidden btn');
            this.setState({
                text: '',
            });
        }
    }
  render() {
    return (
      <div>
        <button onClick={this.hiddenText}>사라져라</button>
        <h2>{this.state.text}</h2>
      </div>
    )
  }
}
