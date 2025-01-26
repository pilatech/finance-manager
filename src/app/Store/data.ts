export const finances = {
    accounts: [
        { id: '1', title: 'Main Account',  isPiggy: false, created_at: '20-02-2024'},
        { id: '2', title: 'My Piggy Bank',  isPiggy: true, created_at: '20-02-2024'},
        { id: '3', title: 'Leisure',  isPiggy: false, created_at: '20-02-2024'}
    ],
    transactions: [
        { id: '1', description: 'Got salary', add: true, accId: '1', amount: 35, created_at: '20-02-2024'},
        { id: '2', description: 'Got salary', add: true, accId: '2', amount: 27, created_at: '20-02-2024'},
        { id: '3', description: 'Bought Groceries', add: true, accId: '3', amount: -38, created_at: '20-02-2024'}
    ]
}