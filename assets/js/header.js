$(".btn-blob").click(function () {
    $(".btn-blob").toggleClass("btn-blob-active");
    $(".blob").toggleClass("blob-active");
    if ($(".blob").hasClass("blob-active")) {
        let nbBlobBtn = document.getElementsByClassName("blob-btn");
        var i = nbBlobBtn.length;
        $('.blob-btn').css("display", "block");
        function myLoop() {
        setTimeout(function() {
            if (!(nbBlobBtn[i] === undefined)) {
                nbBlobBtn[i].style.opacity = "1";
            }
            i--;
            if (i >= 0) {
            myLoop();
            }
        }, 150)}
        myLoop();  
    }
    else {
        $('.blob-btn').css("opacity", "0");
        $('.blob-btn').css("display", "none");
    }
})