function colSize() {
	var realWidth = $(".grid-col:nth-child(2)").width();
	$(".fold").css("height", realWidth);
    //$(".grad").css("margin-top", realWidth);
}

$(document).ready(function() {
    //alert('test');
	colSize;
});	

$(window).on('load', colSize);
$(window).on('resize', colSize);
