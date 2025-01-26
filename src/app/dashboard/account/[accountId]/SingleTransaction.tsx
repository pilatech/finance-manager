import React, { useState } from 'react'
import { CiEdit, CiTrash } from 'react-icons/ci';

export default function SingleTransaction({ transaction }) {
const [ isEdit, setIsEdit] = useState(false);
  return (
    <div className="transaction__container">
        <form className="form form--add" style={ {
            display: isEdit ? "block": "none"
        }}>
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
                    <select  id='type' className="form__input" disabled>
                        <option value="#">Income</option>
                        <option value="#">Expenditure</option>
                    </select>
                    </div>
                    <div className="form__fields form__account">
                    <label htmlFor="account" className="form__label ">Account</label>
                    <select  id='account' className="form__input" disabled>
                        <option value="#">Main Account</option>
                        <option value="#">Agric Supplies</option>
                        <option value="#">Car Savings</option>
                    </select>
                    </div>
                </div>
                <button className="btn"
                onClick={() => setIsEdit(false)}
                >Save</button>
                </form>
                <button className="button button--edit" onClick={() => setIsEdit(true)}><CiEdit/></button>
                <button className="button button--delete"><CiTrash/></button>
                <article key={transaction.id} className="transaction">
                <div className="transaction__main">
                <h4 className="transaction__name">{transaction.description}</h4>
                <p className="transaction__date"> {transaction.created_at}</p>
                </div>
                <div className="transaction__summary">
                <p className="transaction__amount">${transaction.amount}</p>
                </div>
            </article>
    </div>
  )
}
