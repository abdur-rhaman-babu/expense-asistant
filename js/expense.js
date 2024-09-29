
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
