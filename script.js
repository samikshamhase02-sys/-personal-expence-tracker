let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const expenseDate = document.getElementById("expenseDate");
const expenseList = document.getElementById("expenseList");
const totalExpense = document.getElementById("totalExpense");


function displayExpenses() {

    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach(function(expense, index) {

        total += Number(expense.amount);

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>₹${expense.amount}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td>
                <button 
                    class="delete-btn"
                    onclick="deleteExpense(${index})">
                    Delete
                </button>
            </td>
        `;

        expenseList.appendChild(row);
    });

    totalExpense.textContent = total;
}


expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newExpense = {

        name: expenseName.value,

        amount: expenseAmount.value,

        category: expenseCategory.value,

        date: expenseDate.value
    };

    expenses.push(newExpense);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    displayExpenses();

    expenseForm.reset();
});


function deleteExpense(index) {

    expenses.splice(index, 1);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    displayExpenses();
}


displayExpenses();
localStorage.setItem(
    "expenses",
    JSON.stringify(expenses)
);