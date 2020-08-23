$(function() { // Same as document.addEventListener("DOMContentLoaded"...

    // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
    $("#navbar-menu").blur(function(event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            $("#navbarSupportedContent").collapse('hide');

        }
    });

    $("#navbar-menu").click(function(event) {
        $(event.target).focus();

    });


});

//function myFunction(x) {
//    x.classList.toggle("change");

//}