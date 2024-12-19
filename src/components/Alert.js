import React from 'react'

export default function Alert(props) {
    const capitalize=(text)=>{
        let newTxt=text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return newTxt;
    }
  return (
    <div style={{height:'50px'}}>
    {props.alert &&<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)} : </strong>{props.alert.msg}
    </div>}
    </div>
  )
}
