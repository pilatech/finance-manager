export const financeReducer = (state: any, action: any) => {
    if (action.type === 'add_account') {
        // add into database
        // then get back the fresh content
        // set state to that
        return {
            accounts: [...state.accounts, ...action.payLoad],
            transactions: [...state.transactions]
        }
    } else if (action.type === 'edit_account') {
        // replace identified account details
        // get fresh content from the database
        // set state to that

        const newAccounts = state.accounts.map((account: any) => {
            if (account.id === action.payload.id) {
                return {...action.payload}
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
        return {
            accounts: state.accounts.filter((account: any) => {
                return (
                    account.id === action.payload.id
                )
            }),
            transactions: [...state.transactions]
        }

    } else {
        throw Error('Unknown operations')
    }
}