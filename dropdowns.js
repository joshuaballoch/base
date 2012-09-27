$(document).ready(function() {
	$("nav li.trademark").hover(function(){
		$(".trademark_dropdown").toggle();
	});
	$(".trademark_dropdown").hover(function(){
		$(this).toggle();
		$("nav li.trademark").toggleClass("hover");
	});
	$("nav li.brands").hover(function(){
		$(".brands_dropdown").toggle();
	});
	$(".brands_dropdown").hover(function(){
		$(this).toggle();
		$("nav li.brands").toggleClass("hover");
	});
	$("nav li.me").hover(function(){
		$(".me_dropdown").toggle();
	});
	$(".me_dropdown").hover(function(){
		$(this).toggle();
		$("nav li.me").toggleClass("hover");
	});
	$("#menu li.notifications").hover(function(){
		$(".notifications_dropdown").toggle();
	});
	$(".notifications_dropdown").hover(function(){
		$(this).toggle();
		$("#menu li.notifications").toggleClass("hover");
	});
	$("#menu li.shopping-cart").hover(function(){
		$(".cart_dropdown").toggle();
	});
	$(".cart_dropdown").hover(function(){
		$(this).toggle();
		$("#menu li.shopping-cart").toggleClass("hover");
	});

});