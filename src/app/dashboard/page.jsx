'use client'

import React from 'react'
import { useContext } from 'react'
import { FinanceContext } from '../Store/FinanceContext'
import AccountAmount from './account/AccountAmount';
import NetBalance from './NetBalance';
import { useRouter } from 'next/navigation';

export default function Dashboard() {

  const financeData = useContext(FinanceContext);
  const router = useRouter();

  return (
    <main className="page" suppressHydrationWarning>
        <div className="container">
            <h1 className="page-tite">Dashboard</h1>
        </div>
        <div className="container">
          <div className="panel">
            <div className="accounts">
              {
                financeData.state.accounts.map((account) => {
                  return (
                    <article key={account.id} className="account clickable"
                    onClick={() => {
                      router.push(`/dashboard/account/${account.id}`)
                    }} 
                    >
                      <div className="account__main">
                      <h3 className="account__name">Acc#: {account.title}</h3>
                      {account.isPiggy && <p className="account__badge">piggy</p>}
                      </div>
                      <div className="account__summary">
                        <AccountAmount amount={financeData.state.transactions.reduce((acc, curr) => {
                            if (curr.accId === account.id) {
                             return acc + curr.amount;
                            }
                            return acc + 0;
                        }, 0)}/>
                      </div>
                    </article>
                  )
                })
              }
              <div className="button button--add-account">+</div> 
              <form className="form form--add">
              <div className="form__content-container">
                    <div className="form__fields form__account-name">
                      <label htmlFor="account-name" className="form__label">Account Name</label>
                      <input type="text" id='account-name' className="form__input" />
                    </div>
                    <div className="form__fields form__piggy">
                      <p className="input__label">Piggy</p>
                    <label className="switch">
                      <input type="checkbox"/>
                      <span className="slider round"></span>
                    </label>
                    </div>
                    </div>
                    <button className="btn">Save</button>
                  </form>
            </div>
            <div className="summary">
              <NetBalance amount={financeData.state.transactions.reduce((acc, curr) => {
                  return acc + curr.amount
            
              }, 0)}/>
              <h3 className="summary__title">Recent Transactions</h3>
              <div className="transactions">
              {
                    [...financeData.state.transactions].toReversed().slice(0, 3).map(transaction => {
                      return (
                        <article key={transaction.id} className="transaction"
                        onClick={() => {
                          router.push(`/dashboard/transaction/${transaction.id}`)
                        }} 
                        >
                        <div className="transaction__main">
                          <h4 className="transaction__name">{transaction.description}</h4>
                          <p className="transaction__date"> {transaction.created_at}</p>
                        </div>
                        <div className="transaction__summary">
                          <p className="transaction__amount">${transaction.amount}</p>
                        </div>
                      </article>
                      )
                    })
                  }
                <div className="button button--add-transaction">+</div> 
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
              </div>
            </div>
          </div>
        </div>
    </main>
  
  )
}
