import React from 'react'
 
interface ComponentEX04{
    name:string,
}
export default function Children_Comp(props: ComponentEX04) {
    const {name} = props;
  return (
    <div>Children_Comp
        <p>Name con: {name}</p>
    </div>
  )
}
