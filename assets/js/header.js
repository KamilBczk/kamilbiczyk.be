$(".btn-blob").click(function () {
    $(".blob").toggleClass("blob-active");
    if ($(".blob").hasClass("blob-active")) {
        let nbBlobBtn = document.getElementsByClassName("blob-btn");
        var i = nbBlobBtn.length - 1;
        $('.blob-btn').css("display", "block");

        function myLoop() {
        setTimeout(function() {
            nbBlobBtn[i].style.opacity = "1";
            console.log("d");
            i--;
            if (i >= 0) {
            myLoop();
            }
        }, 200)}
        myLoop();  
    }
    else {
        $('.blob-btn').css("opacity", "0");
        $('.blob-btn').css("display", "none");
    }
})