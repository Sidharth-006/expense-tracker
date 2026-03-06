const list = document.getElementById("list")

export function addTransactionDOM(transaction, deleteTransaction){

const sign = transaction.amount < 0 ? "-" : "+"

const item = document.createElement("li")

item.classList.add(transaction.amount < 0 ? "minus" : "plus")

item.innerHTML = `
${transaction.text} (${transaction.category})
<span>${sign}₹${Math.abs(transaction.amount)}</span>
<button class="delete-btn">x</button>
`

// delete event
item.querySelector(".delete-btn").addEventListener("click", () => {
deleteTransaction(transaction.id)
})

list.appendChild(item)

}