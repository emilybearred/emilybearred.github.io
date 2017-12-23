$(function() {
	var previousUrl,nextUrl,previousIndex,nextIndex;
	var indexOfNum = window.location.pathname.indexOf("article/");
	var currentIndex = $(".page-index").text();
	if(indexOfNum > 0){
		nextIndex = Number(currentIndex) + 1;
		if(Number(currentIndex) < 3){
			previousUrl = "../index.html";
		}else{
			previousIndex = Number(currentIndex) - 1;
			previousUrl = "article-" + previousIndex + ".html";
		}
		nextUrl = "article-" + nextIndex + ".html";
	}else{
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
	
	
	$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square',autoplay_slideshow: false});
	$("#gallery a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square', autoplay_slideshow: false});
});