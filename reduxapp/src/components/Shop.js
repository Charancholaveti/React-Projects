import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index';


const Shop = () => {
    // eslint-disable-next-line
    const dispatch=useDispatch();
    const actions=bindActionCreators(actionCreators,dispatch)
  return (
    <div>
    <h2>Withdraw & Deposit</h2>
      {/* <button className="btn btn-primary mx-2"onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
        Update Balance
      <button className="btn btn-primary mx-2"onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button> */}
      <button className="btn btn-primary mx-2"onClick={()=>{actions.depositMoney(100)}}>+</button>
        Update Balance
      <button className="btn btn-primary mx-2"onClick={()=>{actions.withdrawMoney(100)}}>-</button>
    </div>
  )
}

export default Shop
