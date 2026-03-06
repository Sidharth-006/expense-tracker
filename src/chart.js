import Chart from "chart.js/auto"

let chart

export function renderChart(transactions){

const ctx=document.getElementById("chart")

const income=transactions
.filter(t=>t.amount>0)
.reduce((a,b)=>a+b.amount,0)

const expense=transactions
.filter(t=>t.amount<0)
.reduce((a,b)=>a+b.amount,0)

if(chart) chart.destroy()

chart=new Chart(ctx,{
type:"doughnut",
data:{
labels:["Income","Expense"],
datasets:[{
data:[income,Math.abs(expense)]
}]
}
})

}