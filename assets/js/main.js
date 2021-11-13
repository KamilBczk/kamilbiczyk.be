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
    $(".checkbox p").toggleClass("checkbox-active-p");
});

$(".checkbox p").click(function () {
    $(".checkbox .checkbox_square").toggleClass("checkbox_square-active");
    $(".checkbox p").toggleClass("checkbox-active-p");
});

$(".container-contact-form form").submit(function (e) {
    e.preventDefault();

    $(".container-contact-button .icon i").removeClass("far fa-paper-plane");
    $(".container-contact-button .icon i").addClass("fas fa-spinner");
    $(".container-contact-button .icon").addClass("icon-animation");
    $(".container-contact-button p").text("Chargement");
    
    if ($(".container-contact-form #name").val().length === 0) {
        $(".container-contact-form #name").removeClass("red-input green-input");
        $(".container-contact-form #name").addClass("red-input");
    } else {
        $(".container-contact-form #name").removeClass("red-input green-input");
        $(".container-contact-form #name").addClass("green-input");
    }
    if ($(".container-contact-form #inputinfo").val().length === 0) {
        $(".container-contact-form #inputinfo").removeClass("red-input green-input");
        $(".container-contact-form #inputinfo").addClass("red-input");
    } else {
        $(".container-contact-form #inputinfo").removeClass("red-input green-input");
        $(".container-contact-form #inputinfo").addClass("green-input");
    }
    if ($(".container-contact-form #email").val().length === 0) {
        $(".container-contact-form #email").removeClass("red-input green-input");
        $(".container-contact-form #email").addClass("red-input");
    } else {
        $(".container-contact-form #email").removeClass("red-input green-input");
        $(".container-contact-form #email").addClass("green-input");
    }
})