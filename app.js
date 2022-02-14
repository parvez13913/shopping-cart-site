function prductUpdate(product,productPrice,isIncreasing){
    const productInput = document.getElementById(product + '-fild');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber  = parseInt(productNumber)+1;
    }
    else if(productNumber>1){
        productNumber  = parseInt(productNumber)-1;
    }
    productInput.value = productNumber;
    // update phone total...
    const productFild = document.getElementById( product + '-price');
    productFild.innerText = productNumber*productPrice;
    productFild.innerText = productNumber*productPrice;
    // calculate total---
    calculateTotal();
}
function getInputValu(product){
    const productInput  = document.getElementById(product + '-fild');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phonTotalAmount = getInputValu('phon')*1219;
    const caseTotalAmount = getInputValu('case')*59;
    const subTotal = phonTotalAmount + caseTotalAmount;
    const tax = subTotal/10;
    const totalPrice = subTotal + tax;
    // ubdate on the html-----
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phon-plus-button').addEventListener('click',function(){
    prductUpdate('phon',1219,true);
    
});
document.getElementById('phon-minus-buttun').addEventListener('click',function(){
    prductUpdate('phon',1219,false);
});
document.getElementById('case-plus-button').addEventListener('click',function(){
    prductUpdate('case',59,true);
});
document.getElementById('case-minus-button').addEventListener('click',function(){
    prductUpdate('case',59,false);
});