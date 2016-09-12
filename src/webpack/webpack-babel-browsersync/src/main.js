import Account from './account.js';

let account = new Account();
let format = transaction => `<li> ${transaction.amount} (${transaction.date}) </li>`;
let list = document.querySelector('.js-top-transactions');

account.deposit(200000, '2015-01-01');
account.deposit(500000, '2015-02-01');
account.deposit(100000, '2015-03-01');
account.withdraw(300000, '2015-04-01');

list.innerHTML = account.getTopTransactions(3).map(format).join('');
