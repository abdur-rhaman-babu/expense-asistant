
// Calculate your
document.getElementById('calculate').addEventListener('click',function(){
    const income = parseFloat(document.getElementById('income').value);
    const softwer = parseFloat(document.getElementById('softwer').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const utility = parseFloat(document.getElementById('utility').value);

    const expenses = softwer + courses + internet + utility;
    const balance = income - expenses;
    

    const totalExpense = document.getElementById('total-expense')
    const totalBalance = document.getElementById('total-balance')
    
    totalBalance.innerText = balance.toFixed(2);
    totalExpense.innerText = expenses.toFixed(2);

    const history = document.getElementById('result-history');
    history.classList.remove('hidden')

    // history functionality
    const historyCard = document.createElement('div')
    historyCard.innerHTML = `
    <div class = "shadow-lg bg-yellow-100 p-4 my-2 border-l-4 rounded-lg border-green-500">
    <p>Time: ${new Date()}</p>
    <p class = 'font-semibold text-xl'>Income: $${income}</p> 
    <p class = 'font-semibold text-xl'>Expense: $${expenses}</p> 
    <p class = 'font-semibold text-xl'>Income: $${balance}</p>
    </div>
    `
   const list =  document.getElementById('history-tab')
   list.insertBefore(historyCard, list.firstChild)
    
})

document.getElementById('saving-btn').addEventListener('click', function(){
    const income = parseFloat(document.getElementById('income').value);
    const softwer = parseFloat(document.getElementById('softwer').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const utility = parseFloat(document.getElementById('utility').value);
    const savings = parseFloat(document.getElementById('savings').value);

    const expenses = softwer + courses + internet + utility;
    const balance = income - expenses;
    
    const savingBalance = (balance * savings) / 100;
    document.getElementById('saving-text').innerText = savingBalance.toFixed(2);
    document.getElementById('remaining-balance').innerText = (balance - savingBalance).toFixed(2);
})


// access button
const historyButton = document.getElementById('history-btn')
const asistantButton = document.getElementById('asistant-btn')
const historySection = document.getElementById('history-section')
const asistantSection = document.getElementById('asistant-section')
const resultSummery = document.getElementById('result-history')

// history button functionlity
historyButton.addEventListener('click', function(){
    historyButton.classList.add('bg-blue-800', 'text-white')
    asistantButton.classList.remove('bg-blue-800', 'text-white')
    historySection.classList.remove('hidden')
    asistantSection.classList.add('hidden')
    resultSummery.classList.remove('hidden')
})

// asistant button functionlity
asistantButton.addEventListener('click', function(){
    historyButton.classList.remove('bg-blue-800', 'text-white')
    asistantButton.classList.add('bg-blue-800', 'text-white')
    historySection.classList.add('hidden')
    asistantSection.classList.remove('hidden')
    resultSummery.classList.add('hidden')
})
