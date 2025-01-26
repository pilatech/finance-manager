'use client'

import React, { useState } from 'react'
import { useContext } from 'react'
import { FinanceContext } from '@/app/Store/FinanceContext';
import AccountAmount from '../AccountAmount';
import { useRouter, useParams, usePathname } from 'next/navigation';
import SingleTransaction from './SingleTransaction';
import { CiTrash } from 'react-icons/ci';

export default function Dashboard() {

const { accountId } = useParams();
  const financeData = useContext(FinanceContext);
  const router = useRouter();
  const { dispatch } = useContext(FinanceContext);

  function handleAccountDelete(id){
    const confirmed = confirm('All Transactions Associated with this account will be delete. Still want to continue?')
    if (!confirmed){
      return;
    }
    dispatch({
      type: 'delete_account',
      payload: { id }
    })
    router.push('/dashboard');
  }

  const account = financeData.state.accounts.find(account => account.id === accountId)
    console.log(accountId)
  return (
    <main className="page" suppressHydrationWarning>
        <div className="container">
            <h1 className="page-tite align-center">Manage Account</h1>
        </div>
        <div className="container">
          <div className="panel">
            <div className="accounts accounts--single">
                <article className="account account--single">
                <div className="account__main">
                <h3 className="account__name">Acc#: {account?.title}</h3>
                <div className="account__actions">
                    <button className="button button--delete" onClick={(e) => handleAccountDelete(account.id)}><CiTrash/></button>
                    {account?.isPiggy && <p className="account__badge">piggy</p>}
                </div>
                </div>
                <div className="account__summary">
                    <AccountAmount amount={financeData.state.transactions.reduce((acc, curr) => {
                        if (curr.accId === account?.id) {
                        return acc + curr.amount;
                        }
                        return acc + 0;
                    }, 0)}/>
                </div>
                </article>
              <div className="transactions transactions--single">
              {
                    [...financeData.state.transactions].toReversed().map(transaction => {
                      return (
                        <SingleTransaction key={transaction.id} transaction={transaction}/>
                      )
                    })
                  }
              </div>
            </div>
          </div>
        </div>
    </main>
  
  )
}
