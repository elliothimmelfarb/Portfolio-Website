$(document).ready(init());

function init() {
    dimensionSet();

    var navbarTop = $(".nav");
    var navButtons = $(".navB");
    var scrollPage = $(".scroll-page");

    function dimensionSet() {
        if ($(navbarTop).height() > 100) {
            $(scrollPage).css("padding-top", 150);
            $()
        } else {
            $(scrollPage).css("padding-top", 45);
        }
    }

    dimensionSet();

    $(window).on("resize", function () {
        console.log($(navbarTop).height());
        dimensionSet();
    })
}
