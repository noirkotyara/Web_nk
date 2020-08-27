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

// function change() {
//     var $current = $(".btn");
//     $current.text($current.text().replace("View more", "View less"));
// }



/* TOBACCOS CAROUSEL */
var carousel = $(".carouselTobacco"),
    currdeg = 0;

$(".nextTobacco").on("click", { d: "n" }, rotate);
$(".prevTobacco").on("click", { d: "p" }, rotate);

function rotate(e) {
    if (e.data.d == "n") {
        currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
    });
}
/* END TOBACCOS CAROUSEL */

$('#carouselExampleIndicatorsT').carousel({
    interval: 0
});
$(function() {
    $(".Undertext").onclick(function() {
        $(".Undertext").slideToggle();
    });
});


//function myFunction(x) {
//    x.classList.toggle("change");

//}