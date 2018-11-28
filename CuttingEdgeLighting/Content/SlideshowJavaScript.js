//Bottom Manual Slideshow
var slideIndex4 = 1;
showDivs2(slideIndex4);

function plusDivs2(n) {
    showDivs2(slideIndex4 += n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("manSlide");
    if (n > x.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex4 = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex4 - 1].style.display = "block";
}