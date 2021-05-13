$(document).ready(function () {
    // mobile menu
    openNav = () => {
        document.getElementById("myNav").style.height = "100%";
    }

    closeNav = () => {
        document.getElementById("myNav").style.height = "0%";
    }
    $("#pages").click(function () {
        $("#pages-slid").slideToggle("slow");
    });
    $("#article").click(function () {
        $("#article-slid").slideToggle("slow");
    });
    $("#portfolio").click(function () {
        $("#portfolio-slid").slideToggle("slow");
    });


});