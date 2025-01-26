'use client'

import React, { useState } from 'react'
import { useContext } from 'react'
import { FinanceContext } from '@/app/Store/FinanceContext';
import { useRouter, useParams, usePathname } from 'next/navigation';
import SingleTransaction from '../../account/[accountId]/SingleTransaction';

export default function Dashboard() {

const { transactionId } = useParams();
  const financeData = useContext(FinanceContext);
  const router = useRouter();

  const transaction = financeData.state.transactions.find(transaction => transaction.id === transactionId)
    console.log(transactionId)
  return (
    <main className="page" suppressHydrationWarning>
        <div className="container">
            <h1 className="page-tite align-center">Manage Transaction</h1>
        </div>
        <div className="container">
          <div className="panel">
              <div className="transactions transactions--single">
                <SingleTransaction transaction={transaction}/>   
              </div>
            </div>
        </div>
    </main>
  )
}
