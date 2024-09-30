// Calculate your
document.getElementById('calculate').addEventListener('click',function(){
    const income = getInputValueById('income')
    const softwer = getInputValueById('softwer')
    const courses = getInputValueById('courses')
    const internet = getInputValueById('internet')
    const utility = getInputValueById('utility')


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
    <p class = 'font-semibold text-xl'>Income: $${toCurrency(income)}</p> 
    <p class = 'font-semibold text-xl'>Expense: $${toCurrency(expenses)}</p> 
    <p class = 'font-semibold text-xl'>Balance: $${toCurrency(balance)}</p>
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
    const income = getInputValueById('income')
    const softwer = getInputValueById('softwer')
    const courses = getInputValueById('courses')
    const internet = getInputValueById('internet')
    const utility = getInputValueById('utility')
    const savings = getInputValueById('savings')
    

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

// history button functionlity
historyButton.addEventListener('click', function(){
    historyButton.classList.add('bg-blue-800', 'text-white')
    asistantButton.classList.remove('bg-blue-800', 'text-white')

    removeClasslist('history-section', 'hidden')
    removeClasslist('result-history', 'hidden')
    addClasslist('asistant-section', 'hidden')
})

// asistant button functionlity
asistantButton.addEventListener('click', function(){
    historyButton.classList.remove('bg-blue-800', 'text-white')
    asistantButton.classList.add('bg-blue-800', 'text-white')

    addClasslist('history-section', 'hidden')
    removeClasslist('asistant-section', 'hidden')
    addClasslist('result-history', 'hidden')
})
