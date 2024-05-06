import React from 'react'
import Children_Comp from './Children_Comp';
export default function Parent_Comp() {
  const name:string = "Lê Diên Tiến"
    return (
    <div><b>Exercise03</b>
    <br />
        Parent_Comp
        <p>Name cha:{name}</p>
       <Children_Comp name={name}></Children_Comp>
    </div>
  )
}
