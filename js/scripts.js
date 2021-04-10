function colSize() {
	// var realWidth = $(".grid-col:nth-child(2)").width();
	var docWidth = Math.min(1600, $(document).width());
	// var realWidth = Math.min(1600 / 14, docWidth / 12);
	var realWidth = docWidth / 14;
	// console.log(realWidth);
	$(".fold").css("height", realWidth);
	$(".img-path").css("width", realWidth * 6.45);
}


$(window).on('load', colSize);
$(window).on('resize', colSize);