import { FinanceContext } from '@/app/Store/FinanceContext';
import React, { useContext, useState } from 'react'
import { CiEdit, CiTrash } from 'react-icons/ci';

export default function SingleTransaction({ transaction }) {
const [ isEdit, setIsEdit] = useState(false);
const { dispatch } = useContext(FinanceContext)
const [transactionData, setTransactionData] = useState({
    amount: '',
    description: ''
})

function handleTransactionDelete(id){
    dispatch({
      type: 'delete_transaction',
      payload: { id }
    })
  }

    function handleInputChange(e){
      setTransactionData({
          ...transactionData,
          [e.target.name]: e.target.value
      })
  
  }
  
  function handleSubmit(e){
    e.preventDefault();

    const amount = parseInt(transactionData.amount.trim());
    const description = transaction.description.trim();
    if (!amount) {
      console.log("Only Numbers are allowed!")
      return;
    } else if (description.length < 3) {
      console.log("Proper description is needed");
      return;
    }
  
    dispatch({
      type: 'edit_transaction',
      payload: transactionData
    })
    setIsEdit(false);
  }

  return (
    <div className="transaction__container">
        <form onSubmit={handleSubmit} className="form form--add" style={ {
            display: isEdit ? "block": "none"
        }}>
                <div className="form__content-container">
                    <div className="form__fields">
                    <label htmlFor="transaction-name" className="form__label">Transaction</label>
                    <input type="text" 
                    id='transaction-name' 
                    className="form__input"
                    name="description"
                    value={transaction.description}
                    onChange={handleInputChange}
                     />
                    </div>
                    <div className="form__fields form__amount">
                    <label htmlFor="amount" className="form__label">Amount</label>
                    <input type="text" id='amount' className="form__input"
                    name="amount"
                    value={transaction.amount}
                    onChange={handleInputChange}
                     />
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
                <button className="button button--delete" onClick={e => handleTransactionDelete(transaction.id)}><CiTrash/></button>
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
