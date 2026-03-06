export function exportCSV(transactions){

let csv="text,amount,category\n"

transactions.forEach(t=>{
csv+=`${t.text},${t.amount},${t.category}\n`
})

const blob=new Blob([csv],{type:"text/csv"})

const link=document.createElement("a")

link.href=URL.createObjectURL(blob)

link.download="expense-report.csv"

link.click()

}