document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expenseForm");
    const expensesList = document.getElementById("expenses");
    const totalExpensesDisplay = document.getElementById("totalExpenses");
    const clearExpensesBtn = document.getElementById("clearExpensesBtn");

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let totalExpenses = parseFloat(localStorage.getItem("totalExpenses")) || 0;

    function renderExpenses() {
        expensesList.innerHTML = "";
        totalExpenses = 0;
    
        expenses.forEach(expense => {
            const expenseElement = document.createElement("div");
            expenseElement.classList.add("expense");
            expenseElement.innerHTML = `
                <span>${expense.description}</span>
                <span>$${expense.amount}</span>
            `;
            expensesList.appendChild(expenseElement);
            totalExpenses += parseFloat(expense.amount);
        });
    
        totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
    
        // Check if total expenses are over $1000, and change color if true
        if (totalExpenses > 1000) {
            totalExpensesDisplay.style.color = "red";
        } else {
            totalExpensesDisplay.style.color = ""; // Reset to default color
        }
    
        localStorage.setItem("totalExpenses", totalExpenses.toFixed(2));
    }
    

    renderExpenses();

    expenseForm.addEventListener("submit", e => {
        e.preventDefault();

        const description = document.getElementById("description").value;
        const amount = document.getElementById("amount").value;

        if (description.trim() === "" || amount.trim() === "") {
            alert("Please enter both description and amount.");
            return;
        }

        const expense = {
            description,
            amount
        };

        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));

        renderExpenses();

        expenseForm.reset();
    });

    clearExpensesBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all expenses?")) {
            expenses = [];
            localStorage.removeItem("expenses");
            localStorage.removeItem("totalExpenses");
            renderExpenses();
        }
    });

    setInterval(() => {
        renderExpenses();
    }, 60000); // Update every minute (60000 milliseconds)
});
