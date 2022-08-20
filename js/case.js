function incrimentDicriment(plusminus,idValue,itemTotal){
   
    const caseNumberField = document.getElementById(idValue);
    const caseNumberFieldInString = caseNumberField.value;
    const caseNumberFieldInInt = parseInt(caseNumberFieldInString);
   
    const itemTotalField = document.getElementById(itemTotal);
    // const itemTotalFieldInString = itemTotalField.innerText;
    // const itemTotalFieldInFloat = parseFloat(itemTotalFieldInString);

    let newCaseNumber;
    let itemTotalPrice;
    if(plusminus== true){
     newCaseNumber = caseNumberFieldInInt + 1;
     
    }
    else if (plusminus== false){
    newCaseNumber = caseNumberFieldInInt - 1;
    }



    if(itemTotal == 'case-total' ){
        itemTotalPrice = newCaseNumber * 59;
        itemTotalField.innerText = itemTotalPrice;
    }
    else if(itemTotal == 'Phone-total'){
        itemTotalPrice = newCaseNumber * 1219;
        itemTotalField.innerText = itemTotalPrice;
    }

    subtotal(); 
    caseNumberField.value = newCaseNumber;
}


function getItemTotal(itemTotal){
    const PhoneTotal =  document.getElementById(itemTotal);
    const PhoneTotalInString = PhoneTotal.innerText;
    const PhoneTotalInFloat = parseFloat(PhoneTotalInString);
    return PhoneTotalInFloat;
}
function subtotal(){
  const phoneTotal = getItemTotal("Phone-total");
  const caseTotal = getItemTotal("case-total");
  const subtotalValue = document.getElementById("subtotal-value");
  const taxValue = document.getElementById('tax-value');
  const ToatalValue = document.getElementById('total-value');

  const subTotal = phoneTotal + caseTotal;
  subtotalValue.innerText = subTotal;

  taxValueIn2Decimal = (subTotal*0.01).toFixed(2);
  taxValue.innerText = taxValueIn2Decimal;
  ToatalValue.innerText = taxValueIn2Decimal + subTotal;

   
}
document.getElementById('btn-case-plus').addEventListener('click', function(){ 
    incrimentDicriment(true,'number-of-case-item','case-total'); 
}) 
document.getElementById('btn-case-minus').addEventListener('click', function(){ 
    console.log('inside function')
    incrimentDicriment(false,'number-of-case-item','case-total'); 

}) 

// for phone section
document.getElementById("btn-phone-plus").addEventListener('click', function(){ 
    incrimentDicriment(true,"number-of-phone",'Phone-total');   
}) 

document.getElementById("btn-phone-minus").addEventListener('click', function(){ 
    incrimentDicriment(false, "number-of-phone",'Phone-total'); 
}) 
document.getElementById("remove-case").addEventListener('click', function(){ 
    const phoneCart = document.getElementById('phone-cart');
    phoneCart.style.display = 'none';
}) 
document.getElementById("remove-phone").addEventListener('click', function(){ 
    const caseCart = document.getElementById('case-cart');
    caseCart.style.display = 'none';
}) 




