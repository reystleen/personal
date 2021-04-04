function colSize() {
	var realWidth = $(".grid-col:nth-child(2)").width();
	$(".fold").css("height", realWidth);
	$(".img-path").css("width", realWidth*6.45);
}


$(document).on('load', colSize);
$(window).on('resize', colSize);
