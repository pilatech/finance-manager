import React from 'react'

export default function AccountAmount( { amount }) {
    const markup = amount < 1 ? 
    <p className="account__amount account__amount--negative">${amount}</p> : 
    <p className="account__amount">${amount}</p>
  return (
     markup   
  )
}
