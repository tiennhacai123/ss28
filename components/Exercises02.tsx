import React, { Component } from 'react'
 
interface ComponentEx2{
    id:number,
    name:string,
    date:string,
    address:string,
}
export default class Exercises02 extends Component<any,ComponentEx2> {
    constructor(props:ComponentEx2){
        super(props);
        this.state = {
            id: 1,
            name: 'tien',
            date: '28/07/2005',
            address: 'Ha Noi'
        }
    }
  render() {
    return (
      <div> <b>Exercises02</b><br></br>
        <b>Thông tin cá nhân</b>
        <p>id:{this.state.id}</p>
        <p>name:{this.state.name}</p>
        <p>date:{this.state.date}</p>
        <p>address:{this.state.address}</p>

      </div>
    )
  }
}
