$(".services-type div").click(function (e) {
    e.preventDefault();
    $(".services-type div").removeClass("services-type_active");
    $(this).addClass("services-type_active");
});