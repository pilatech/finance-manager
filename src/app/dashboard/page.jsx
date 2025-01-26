'use client'

import React, { useState } from 'react'
import { useContext } from 'react'
import { FinanceContext } from '../Store/FinanceContext'
import AccountAmount from './account/AccountAmount';
import NetBalance from './NetBalance';
import { useRouter } from 'next/navigation';
import AddAccountForm from './AddAccountForm';
import AddTransactionForm from './AddTransactionForm';

export default function Dashboard() {

  const financeData = useContext(FinanceContext);
  const router = useRouter();
  const [ accountFormActive, setAccountFormActive ] = useState(false);
  const [ transactFormActive, setTransactFormActive ] = useState(false);

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
              <div onClick={() => {
                setAccountFormActive(!accountFormActive);
              }} className="button button--add-account" >+</div> 
              {
                accountFormActive && <AddAccountForm setFormActive={setAccountFormActive}/>
              }
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
                <div className="button button--add-transaction"
                onClick={() => {
                  setTransactFormActive(!transactFormActive);
                }}>+</div> 
                { transactFormActive && <AddTransactionForm/>}
              </div>
            </div>
          </div>
        </div>
    </main>
  
  )
}
