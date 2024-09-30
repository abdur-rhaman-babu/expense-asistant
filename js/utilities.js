// getInputvalueById
function getInputValueById (id){
   return parseFloat(document.getElementById(id).value)
}

// 
function toCurrency (amount){
    return amount.toFixed(2)
}

// addclasslistfunction
function addClasslist (add, classes){
   return document.getElementById(add).classList.add(classes)
}

// function removeClasslist
function removeClasslist(remove, classes){
    return document.getElementById(remove).classList.remove(classes)
}