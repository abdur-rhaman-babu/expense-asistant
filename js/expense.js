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
    const history = document.getElementById('result-history');

    
    // history functionality
    const historyCard = document.createElement('div')
    const list =  document.getElementById('history-tab')
    historyCard.innerHTML = `
    <div class = "shadow-lg bg-yellow-100 p-4 my-2 border-l-4 rounded-lg border-green-500">
    <p>Time: ${new Date()}</p>
    <p class = 'font-semibold text-xl'>Income: $${income.toFixed(2)}</p> 
    <p class = 'font-semibold text-xl'>Expense: $${expenses.toFixed(2)}</p> 
    <p class = 'font-semibold text-xl'>Income: $${balance.toFixed(2)}</p>
    </div>
    `
   
   if ( (income > expenses) && (softwer >= 0 && courses >=0 && utility >=0 && internet >=0 ) ){
       totalBalance.innerText = balance.toFixed(2);
       totalExpense.innerText = expenses.toFixed(2);
       history.classList.remove('hidden')
       list.insertBefore(historyCard, list.firstChild)
    }
    else {
        alert('something is worng went, please try again')
        history.classList.add('hidden')
    }
})

// savings functionality
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

    if ( balance >= savingBalance && savingBalance > 0 ){
        document.getElementById('saving-text').innerText = savingBalance.toFixed(2);
        document.getElementById('remaining-balance').innerText = (balance - savingBalance).toFixed(2);
    }else{
        alert('insufficent balance')
    }
    
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
