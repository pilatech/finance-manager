export const authReducer = (state: any, action: any) => {
    if (action.type === 'register') {
        // add user into database
        // if success update the user in state
        // give access to their items
        return {
                userId: '1',
                email: 'pilatech6@gmail.com'
        }
    } else if (action.type === 'login') {
        // compare in database
        // if correct update user in state
        return {
            userId: '1',
            email: 'pilatech6@gmail.com'
    }

    } else if (action.type === 'logout') {
        // delete user state
        return {
        }

    } else {
        throw Error('Unknown operations')
    }
}