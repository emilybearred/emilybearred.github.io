$(function() {
	/*页面页数JS*/
    var previousUrl, nextUrl, previousIndex, nextIndex;
    var indexOfNum = window.location.pathname.indexOf("article/");
    var currentIndex = $(".page-index").text();
    if (indexOfNum > 0) {
        nextIndex = Number(currentIndex) + 1;
        if (Number(currentIndex) < 3) {
            previousUrl = "../index.html";
        } else {
            previousIndex = Number(currentIndex) - 1;
            previousUrl = "article-" + previousIndex + ".html";
        }
        nextUrl = "article-" + nextIndex + ".html";
    } else {
        nextIndex = Number(currentIndex) + 1;
        nextUrl = "article/article-" + nextIndex + ".html";
    }
    $(".btn-previous").attr("href", previousUrl);
    $(".btn-next").attr("href", nextUrl);
    $(".book").hover(function() {
        $(".btn-previous").removeClass("hide");
        $(".btn-next").removeClass("hide");
    }, function() {
        $(".btn-previous").addClass("hide");
        $(".btn-next").addClass("hide");
    });

	/*图片放大、滚动 JS*/
	$("area[rel^='prettyPhoto']").prettyPhoto();
	$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});

});