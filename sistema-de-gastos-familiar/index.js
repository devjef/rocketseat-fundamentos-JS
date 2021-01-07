'use strict'

const financialFamilyDataBase = {
    income: [1000, 1200, 116.40],
    expenses: [65, 157.98, 150, 250]
};

const sumFinancialData = (financialData) => {
    let total = 0; 

    for(let data of financialData) {
        total += data; 
    };

    return total;
};

const calculateBalance = (finances) => {
    let totalIncome = sumFinancialData(finances.income);
    let totalExpenses = sumFinancialData(finances.expenses);

    const total = totalIncome - totalExpenses;

    console.log(`Total income: R$${totalIncome}`);
    console.log(`Total income: R$${totalExpenses}`);

    return total >= 0 ? `Positive financial situation: R$${total.toFixed(2)}` : `Negative financial situation R$${total.toFixed(2)}`;
};

console.log(calculateBalance(financialFamilyDataBase));