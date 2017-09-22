$(function(){

    // here we need to populate the form fields with the values that were saved to localStorage
    var coffeeOrder = localStorage.getItem('coffeeType');
    var email = localStorage.getItem('customerEmail');
    var size = localStorage.getItem('size');
    var shot = localStorage.getItem('shot');
    var caffeine = localStorage.getItem('caffeine');

    $('#coffeeOrder').val(coffeeOrder);
    $('#emailInput').val(email);

    if (size) {
        $("input[name=size]").attr("checked", false);
        var elementToSelect = "input[value=" + size + "]";
        $(elementToSelect).attr("checked", true);
    }

    // $('input:checked').val();
    $('#flavorShot').val(shot);
    $('#strengthLevel').val(caffeine);

    $("form").submit(function(e) {
        // get the values for each element in the form
        // save those values to local storage
        e.preventDefault();

        var coffeeOrder = $('#coffeeOrder').val();
        var customerEmail = $('#emailInput').val();
        var size = $('input:checked').val();
        var shot = $('#flavorShot').val();
        var caffeine = $('#strengthLevel').val();

        localStorage.setItem('coffeeType', coffeeOrder);
        localStorage.setItem('customerEmail', customerEmail);
        localStorage.setItem('size', size);
        localStorage.setItem('shot', shot);
        localStorage.setItem('caffeine', caffeine);

    });
});
