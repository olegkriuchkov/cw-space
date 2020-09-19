function hamburgerClickHandler() {

	$("header nav div.hamburger").toggleClass("change");
	$("header nav ul").toggleClass("active");
}


$(document).ready(function() {
	
   
	var popup = document.getElementById("popup"); 
	popup.style.display = "none";                          // Hide Poppup message

	var popupForm = document.getElementById("popup-form");
	popupForm.style.display = "none";                      // Hide Poppup Form


	/*  SLIDER  */

	var clickCounter = 0;

	$(".slider_arrows").on("click", function () {

		var alex = $("#first-slide polygon.alex"),
			alexComment = $("#first-slide polygon.comment-alex"),
			alexText = $("#first-slide div.alex-text p"),
			anna = $("#first-slide polygon.anna"),
			annaComment = $("#first-slide polygon.comment-anna"),
			annaText = $("#first-slide div.anna-text p"),
			den = $("#first-slide polygon.den"),
			denComment = $("#first-slide polygon.comment-den"),
			denText = $("#first-slide div.den-text p"),
			jane = $("#first-slide polygon.jane"),
			janeComment = $("#first-slide polygon.comment-jane"),
			janeText = $("#first-slide div.jane-text p");

		clickCounter++;
		if (clickCounter%2) {
			alex.css({"transform": "translate(-184px, 409px)"});
			anna.css({"transform": "translate(184px, -409px)"});
			den.css({"transform": "translate(183px, 409px)"});
			jane.css({"transform": "translate(-183px, -407px)"});

			alexComment.css({"transform": "translate(184px, 413px)"});
			annaComment.css({"transform": "translate(-183px, -405px)"});
			denComment.css({"transform": "translate(-183px, 411px)"});
			janeComment.css({"transform": "translate(184px, -405px)"});

			alexText.css({"transform": "translate(184px, 413px)"});
			annaText.css({"transform": "translate(-183px, -405px)"});
			denText.css({"transform": "translate(-183px, 411px)"});
			janeText.css({"transform": "translate(184px, -405px)"});

		} else {
			alex.css({"transform": "translate(0px, 0px)"});
			anna.css({"transform": "translate(0px, 0px)"});
			den.css({"transform": "translate(0px, 0px)"});
			jane.css({"transform": "translate(0px, 0px)"});

			alexComment.css({"transform": "translate(0px, 0px)"});
			annaComment.css({"transform": "translate(0px, 0px)"});
			denComment.css({"transform": "translate(0px, 0px)"});
			janeComment.css({"transform": "translate(0px, 0px)"});

			alexText.css({"transform": "translate(0px, 0px)"});
			annaText.css({"transform": "translate(0px, 0px)"});
			denText.css({"transform": "translate(0px, 0px)"});
			janeText.css({"transform": "translate(0px, 0px)"});
		}
});
	


	/* ----------------------- */


	/* BOOK button in the Office seats  */
	var officeSeatsBtn = $(".office_seats button");
	officeSeatsBtn.on("click", function() {
		popupForm.style.display = "block";
	});
	/* ----------------------- */


	/* Show Comments  */
	var author = $("[data-author]");
	$("polygon").hover(
		function() {
			if ($(this).attr("data-author")) {
				$(".comment-"+$(this).attr("data-author")).fadeIn(150);
				$("."+$(this).attr("data-author")+"-text p").fadeIn(200);
			}
		},
		function() {
			$(".comment-"+$(this).attr("data-author")).fadeOut(150);
			$("."+$(this).attr("data-author")+"-text p").fadeOut(200);
		}
	)
	/* ----------------------- */


   	/* Show POP UP after submit the form */
	var form = $("form");
	form.on("submit", function(event) {

			event.preventDefault();

			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			});

			if ($(this).parent().attr("id") == "popup-form") {
				$(this).parent().css("display", "none");
				popup.style.display = "inline-block";
			} else {
				popup.style.display = "inline-block";
			}
			
			this.reset();
	});

	/* ----------------------- */


	/* POP UP close script */
	var popupBtnClose = $("#popupCloseButton");

	popupBtnClose.on("click", function(){

		popup = document.getElementById("popup");
		popup.style.display = "none";

	});	
	/* ----------------------- */

	/* Скролл из главного меню */
	$("header nav").on("click", "a", function(event) {

		event.preventDefault();

	    var id = $(this).attr("href"),
	    	dest = $(id).offset().top;

	    $("body,html").animate({
	      scrollTop: dest
	    }, 800);

	    $("header nav div.hamburger").toggleClass("change");
		$("header nav ul").toggleClass("active");
	});
	/* ----------------------- */


	/* banner ARROW  scroll */
	$(".arrow").on("click", function(){
		var id = $(this).attr("href");
		var	dest = $(id).offset().top;

		$("body,html").animate({
	      scrollTop: dest
	    }, 400);
	});
	/* ----------------------- */


	/* scrollbtn ARROW  scroll */

	var scrollBtn = $(".scrollbtn");
	scrollBtn.css("display", "none");

	$(document).scroll( function() {

		if ($(window).width() >= '768') {
			if ($(document).scrollTop() > 0) {
				scrollBtn.fadeIn(400);
			} else {
				scrollBtn.fadeOut(200);
			}
		} else return;

	});

	$(".scrollbtn").on("click", function() {
		var id = $(this).attr("href"),
			dest = $(id).offset().top;

		$("body,html").animate({
			scrollTop: dest
		}, 400)
	});
	/* ----------------------- */


	/* POP UP close script */
	var popupFormBtnClose = $("#popupFormCloseButton");

	popupFormBtnClose.on("click", function(){

		popupForm.style.display = "none";

	});	
	/* ----------------------- */


	/* LOCATION animation */
	var loc = document.getElementsByClassName("circle");
	
	[].forEach.call(loc, function(item) {

		$(item).hover(
			function() {
				$("#line", item).slideToggle(200, function() {
					$("#location-name", item).slideToggle();
				});
			},
			function() {
				$("#location-name", item).slideToggle(200, function() {
					$("#line", item).slideToggle();
				});
			}
		);
	});
	/* ----------------------- */
});
