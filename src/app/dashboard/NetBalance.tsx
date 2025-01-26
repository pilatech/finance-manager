import React from 'react'

export default function NetBalance({ amount }) {
    const markup = amount < 0 ? <div className="summary__worth account__amount--negative" style={{color: 'red'}}>${amount} <em>Net Balance</em></div> :
    <div className="summary__worth">${amount}<em>Net Balance</em></div>
  return (
    markup
  )
}
