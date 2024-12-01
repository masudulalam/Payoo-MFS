// show the cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function() {
    // show the cash out form when cash out button will clicked
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money form when add money button will clicked
    document.getElementById('add-money-form').classList.add('hidden');
})


// show add money form and hide cash out form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');

    // hide the cash out form
    document.getElementById('cash-out-form').classList.add('hidden');
})