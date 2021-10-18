// console.log('I am in a separate file')
function updateProduct(product,price, isIncreasing){
    debugger
    const productInput = document.getElementById(product+'-number');
    let productNumber = parseInt(productInput.value);
    if(isIncreasing == true){
        productNumber = productNumber + 1;
    }
    else if(productNumber > 0){
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;
    // update total 
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;
    calculation();
}

function getInputNumber(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculation(){
   const phoneTotal = getInputNumber('phone') * 1219;
   const caseTotal = getInputNumber('case') * 59;

   const subTotal = phoneTotal + caseTotal;
   const taxTotal = subTotal / 10;
   const Total = subTotal + taxTotal;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = taxTotal;
   document.getElementById('total').innerText = Total;
    
}

//handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    // console.log('phone plus clicked');
   updateProduct('phone',1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    // console.log('phone minus clicked');
    updateProduct('phone',1219, false);
});

//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('case plus clicked');
   updateProduct('case',59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    // console.log('case minus clicked');
    updateProduct('case',59, false);
});