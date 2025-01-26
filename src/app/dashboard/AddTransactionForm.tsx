import React from 'react'

export default function AddTransactionForm() {
  return (
    <form className="form form--add">
    <div className="form__content-container">
      <div className="form__fields">
        <label htmlFor="transaction-name" className="form__label">Transaction</label>
        <input type="text" id='transaction-name' className="form__input" />
      </div>
      <div className="form__fields form__amount">
        <label htmlFor="amount" className="form__label">Amount</label>
        <input type="text" id='amount' className="form__input" />
      </div>
      <div className="form__fields form__type">
        <label htmlFor="type" className="form__label">Type</label>
        <select  id='type' className="form__input">
          <option value="#">Income</option>
          <option value="#">Expenditure</option>
        </select>
      </div>
      <div className="form__fields form__account">
        <label htmlFor="account" className="form__label ">Account</label>
        <select  id='account' className="form__input" >
            <option value="#">Main Account</option>
            <option value="#">Agric Supplies</option>
            <option value="#">Car Savings</option>
        </select>
      </div>
    </div>
    <button className="btn">Save</button>
  </form>
  )
}
