/*
function applyDiscount(){
    let balance = document.getElementById('balance-total').innerText;
    // console.log(balance);
    const newBalance = (balance - 0.3 * balance).toFixed(2);
    if(newBalance > 200){
        document.getElementById('balance-total').innerText  = newBalance;
    }
    // console.log(newBalance)    
}
*/

function applyDiscount(){
    let balance = document.getElementById('balance-total').innerText;
    
    let inputValue = document.getElementById('disco').value;

    if(inputValue === 'DISC30'){
        const newBalance = (balance - 0.3 * balance).toFixed(2);
        if(newBalance > 200){
            document.getElementById('balance-total').innerText  = newBalance;
        }
    }
    else{
        alert('Invalid Coupon')
    }

}

