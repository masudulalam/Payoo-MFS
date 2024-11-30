// console.log('from login.js');

// document.getElementById('id').addEventListener('click', fun)

// step - 1: set event handler:
document.getElementById('btn-login').addEventListener('click', function(event) {
    // step - 2: prevent default behavior(prevent reloading browser)
    event.preventDefault();
    console.log('Login button clicked.');

    // step - 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);

});