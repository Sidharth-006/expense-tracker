import "./style.css"

import { getTransactions, saveTransactions } from "./storage.js"
import { addTransactionDOM } from "./ui.js"
import { exportCSV } from "./exportCSV.js"
import { renderChart } from "./chart.js"
import { toggleTheme } from "./theme.js"

const balance = document.getElementById("balance")
const income = document.getElementById("money-plus")
const expense = document.getElementById("money-minus")
const list = document.getElementById("list")

const form = document.getElementById("form")
const text = document.getElementById("text")
const amount = document.getElementById("amount")
const category = document.getElementById("category")

const exportBtn = document.getElementById("exportBtn")
const themeToggle = document.getElementById("themeToggle")

let transactions = getTransactions()

// UPDATE VALUES

function updateValues(){

const amounts = transactions.map(t => t.amount)

const total = amounts.reduce((a,b)=>a+b,0)

const inc = amounts.filter(a=>a>0).reduce((a,b)=>a+b,0)

const exp = amounts.filter(a=>a<0).reduce((a,b)=>a+b,0) * -1

balance.innerText = `₹${total}`
income.innerText = `₹${inc}`
expense.innerText = `₹${exp}`

renderChart(transactions)

}

// DELETE TRANSACTION

function deleteTransaction(id){

transactions = transactions.filter(t => t.id !== id)

saveTransactions(transactions)

init()

}

// ADD TRANSACTION

function addTransaction(e){

e.preventDefault()

const transaction = {
id: Date.now(),
text: text.value,
amount: +amount.value,
category: category.value
}

transactions.push(transaction)

saveTransactions(transactions)

init()

form.reset()

}

// INIT

function init(){

list.innerHTML = ""

transactions.forEach(t => addTransactionDOM(t, deleteTransaction))

updateValues()

}

exportBtn.addEventListener("click", ()=>exportCSV(transactions))

themeToggle.addEventListener("click", toggleTheme)

form.addEventListener("submit", addTransaction)

init()