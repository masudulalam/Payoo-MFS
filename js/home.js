// add money to the account
/**
 * s-1: add event handler
 * prevent page reload after form submit
 * 
 * s-2: get money from the amount input field to be added to the available balance
 * 
 * s-3: verify the pin number
 * 
 * s-4: get the current balance
 * 
 * s-5: add addMoneyInput with balance
 * 
 * s-6: update the balance
 */

// step 1: add an event handler to the add money button
document.getElementById('btn-add-money').addEventListener('click', function(event) {
    // prevent page reload after form submit
    event.preventDefault();

    // step 2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(typeof addMoneyInput);

    // get the provided pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step 3: verify the Pin number
    if (pinNumberInput === '123') {
        console.log('add the money');

        // step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step 5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        
        // step 6: update the balance
        document.getElementById('account-balance').innerText = newBalance;

    } else {
        alert("Invalid Pin number. Please try again.");
    }

})