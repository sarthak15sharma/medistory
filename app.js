window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("#main_logo").style.width = "260px";
        document.querySelector("#header").style.backgroundcolor = "white";
    } else {
        document.querySelector("#header").style.backgroundcolor = "#181818";
        document.querySelector("#main_logo").style.width = "400px";
    }
}