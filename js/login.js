// console.log('from login.js');

// document.getElementById('id').addEventListener('click', fun)

// step - 1: set event handler:
document.getElementById('btn-login').addEventListener('click', function(event) {
    // step - 2: prevent default behavior(prevent reloading browser)
    event.preventDefault();

    // step - 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    // get the pin number
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // step - 4: Validate Phone number and Pin
    if (phoneNumber === '01787058876' && pinNumber === 'In the name of Allah,') {
        console.log('You are logged in.');
    } else {
        alert('Wrong Phone number or Pin.')
    }
});