import { sortBy, first } from 'underscore';
 
class Account {
    constructor() {
        this.transactions = [];
    }
    getTopTransactions(numberOfTopTransactions) {
        var getSortKey = transaction => -Math.abs( transaction.amount );
        var sortedTransactions = sortBy( this.transactions, getSortKey );
        return first( sortedTransactions, numberOfTopTransactions );
    }
    deposit( amount, date ) {
        this.transactions.push({ 
            amount : amount,
            date   : date
        });
    }
    withdraw( amount, date ) {
        this.transactions.push({ 
            amount : -amount,
            date   : date
        });    
    }
};
 
export default Account;