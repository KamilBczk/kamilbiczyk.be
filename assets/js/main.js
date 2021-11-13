$(".contact-form-btn-arrow").click(function () {
    $(".contact-form-btn-arrow").toggleClass("contact-form-btn-arrow-active")
    $(".container-contact-li").toggleClass("container-contact-li-active");
});

$(".container-contact-li ul li").click(function () {
    $(".contact-form-btn-arrow").removeClass("contact-form-btn-arrow-active")
    $(".container-contact-li").removeClass("container-contact-li-active");
    $("#inputinfo").val($(this).text());
});

$(".checkbox .checkbox_square").click(function () {
    $(".checkbox .checkbox_square").toggleClass("checkbox_square-active");
});

$(".checkbox p").click(function () {
    $(".checkbox .checkbox_square").toggleClass("checkbox_square-active");
});