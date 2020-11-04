
function toggleNav() {
    var navList = document.getElementById("nav-list");
    navList.classList.toggle("expanded");
    var btnMenu = document.getElementById("menu-btn");
    if (navList.classList.contains("expanded")) {
        btnMenu.innerHTML = "&times;";
    }
    else {
        btnMenu.innerHTML = "&#9776;";
    }
}

$(".thumb").on("click", function () {
    var imgSrc = $(this).attr("src");

    //PLug an <img> tag into #lightbox-content using imgSrc as src 
    $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive" />');

    //Make the lighbox visible by fading it in 
    $("#lightbox-container").fadeIn(500);

    // when use clicks img it fades ou t
    $("#lightbox-container").on("click", function () {
        $(this).fadeOut(500);
    });
});
