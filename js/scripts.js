function colSize() {
	// var realWidth = $(".grid-col:nth-child(2)").width();
	var docWidth = Math.min(1600, $(document).width());
	// var realWidth = Math.min(1600 / 14, docWidth / 12);
	var realWidth = docWidth / 14;
	// console.log(realWidth);
	$(".logo").css("width", realWidth);
	$(".switch-container").css("width", realWidth);
	$(".fold").css("height", realWidth);
	$(".img-path").css("width", realWidth * 6.4);
	$(".img-cthulhu").css("width", realWidth);
	$(".logo a svg").css("width", realWidth / 2);
}


$(window).on('load', colSize);
$(window).on('resize', colSize);
