export const financeReducer = (state: any, action: any) => {
    if (action.type === 'add_account') {
        // add into database
        // then get back the fresh content
        // set state to that
        const newAccounts = state.accounts.map(account => {
            return {...account}
        })
        const newTransactions = state.transactions.map(transaction => {
            return {...transaction}
        })
        return {
            accounts: [...newAccounts, action.payload],
            transactions: newTransactions
        }
    } else if (action.type === 'edit_account') {
        // replace identified account details
        // get fresh content from the database
        // set state to that

        const newAccounts = state.accounts.map((account: any) => {
            if (account.id === action.payload.id) {
                return { ...action.payload}
            } else {
                return {...account}
            }
        })
        return {
            accounts: newAccounts,
            transactions: [...state.transactions]
        }

    } else if (action.type === 'delete_account') {
        // delete account with given id from database
        // get the new data
        // set the state to that
        // -------Need to delete all transactions
        const newAccounts = state.accounts.map(account => {
            return {...account}
        })
        const newTransactions = state.transactions.map(transaction => {
            return {...transaction}
        })

        const filteredAccounts = newAccounts.filter((account: any) => {
            return (
                account.id !== action.payload.id
            )
        })

        return {
            accounts: filteredAccounts,
            transactions: newTransactions
        }

    } else if (action.type === 'add_transaction'){
        const newAccounts = state.accounts.map(account => {
            return {...account}
        })
        const newTransactions = state.transactions.map(transaction => {
            return {...transaction}
        })
        return {
            accounts: newAccounts,
            transactions: [...newTransactions, action.payload]
        }
    } else if (action.type === 'delete_transaction') {

        const newAccounts = state.accounts.map(account => {
            return {...account}
        })
        const newTransactions = state.transactions.map(transaction => {
            return {...transaction}
        })

        const filteredTransactions = newTransactions.filter((transaction: any) => {
            return (
                transaction.id !== action.payload.id
            )
        })

        return {
            accounts: newAccounts,
            transactions: filteredTransactions
        }
    }  else if (action.type === 'edit_transaction') {
        const newAccounts = state.accounts.map(account => {
            return {...account}
        })
        const newTransactions = state.transactions.map(transaction => {
            return {...transaction}
        })

       const foundIndex = newTransactions.findIndex(transaction => {
        return transaction.id === action.payload.id;
       })

       console.log(foundIndex)


        return {
            accounts: newAccounts,
        }
    } else {
        throw Error('Unknown operations')
    }
}