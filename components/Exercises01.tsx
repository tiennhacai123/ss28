import React, { Component } from 'react'
interface Exercises01Component{
  name:string,
}
export default class Exercises01 extends Component<any,Exercises01Component> {
  constructor(props: Exercises01Component){
    super(props);
    this.state = {
        name:'Lê Diên Tiến'
    }
  }
  render() {
    return (
      <div>
        <b>Exercises01</b>
        <p>Họ và tên: {this.state.name}</p>
      </div>
    )
  }
}
