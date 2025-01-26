import React, { useContext, useState } from 'react'
import { FinanceContext } from '../Store/FinanceContext'
import { genId } from '../../../utils/utils';

export default function AddTransactionForm({ setFormActive }) {
  const { state, dispatch } = useContext(FinanceContext);
  const [transaction, setTransaction] = useState({
    description: '',
    add: 'income',
    accountId: '',
    amount: ''
  })

  function handleInputChange(e){
    setTransaction({
        ...transaction,
        [e.target.name]: e.target.value
    })

}

function handleSubmit(e){
  e.preventDefault();
  console.log(transaction)
  const amount = parseInt(transaction.amount.trim());
  const description = transaction.description.trim();
  if (!amount) {
    console.log("Only Numbers are allowed!")
    return;
  } else if (description.length < 3) {
    console.log("Proper description is needed");
    return;
  }
  let add = true;
  if (transaction.add === 'expenditure')
    add = false;

  dispatch({
    type: 'add_transaction',
    payload: {
      id: genId(),
      description,
      accId: transaction.accountId,
      add,
      amount: add ? amount : -(amount),
      create_at: new Date()
    }
  })
  setFormActive(false);
}

  return (
    <form className="form form--add" onSubmit={handleSubmit}>
    <div className="form__content-container">
      <div className="form__fields">
        <label htmlFor="transaction-name" className="form__label">Transaction</label>
        <input type="text" id='transaction-name' 
        name="description" 
        className="form__input"  
        onChange={handleInputChange}/>
      </div>
      <div className="form__fields form__amount">
        <label htmlFor="amount" className="form__label">Amount</label>
        <input 
        type="text" 
        id='amount' 
        name="amount" 
        className="form__input"
        onChange={handleInputChange}
         />
      </div>
      <div className="form__fields form__type">
        <label htmlFor="type" className="form__label">Type</label>
        <select  id='type' name="add" className="form__input"
        onChange={handleInputChange} defaultValue="income">
          <option value="income">Income</option>
          <option value="expenditure">Expenditure</option>
        </select>
      </div>
      <div className="form__fields form__account">
        <label htmlFor="account" className="form__label ">Account</label>
        <select  id='account' name="accountId" className="form__input" onChange={handleInputChange} 
        defaultValue={state?.accounts[0]?.id}>
          {
            state.accounts.map((account) => (
              <option 
              key={account.id} value={account.id}>{account.title}</option>
            ))
          }
            
            <option value="#">Agric Supplies</option>
            <option value="#">Car Savings</option>
        </select>
      </div>
    </div>
    <button className="btn">Save</button>
  </form>
  )
}
