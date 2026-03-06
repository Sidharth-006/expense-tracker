export function filterTransactions(transactions,search,category){

return transactions.filter(t=>{

const matchText=t.text.toLowerCase().includes(search.toLowerCase())

const matchCategory=category==="all" || t.category===category

return matchText && matchCategory

})

}