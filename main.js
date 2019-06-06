/*BURGER MENU*/

const navbarSmall = document.querySelector(".mobile-navigation"),
    burgermenu = document.querySelector(".burger-button"),
    navScrollMob = document.querySelector(".container-mobile");

burgermenu.addEventListener("click", openSmallMenu);

function openSmallMenu() {
    burgermenu.classList.toggle("active"), navbarSmall.classList.toggle("show"), navScrollMob.classList.remove("navScrollMob")
}
window.onscroll = function () {
    50 < window.pageYOffset ? (navScrollMob.classList.add("navScroll")) : (navScrollMob.classList.remove("navScroll"))
};


/*MENU ON SCROLL*/
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 90) {
        $(".navigation").addClass("active");
    } else {
        $(".navigation").removeClass("active");
    }
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 90) {
        $(".woron_nav").addClass("woron_nav-active");
    } else {
        $(".woron_nav").removeClass("woron_nav-active");
    }
});

/*SCROLL TO SECTION from https://stackoverflow.com/questions/5172717/how-to-navigate-to-a-section-of-a-page*/

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/*Registration*/

$(document).on("click",".button",function() {
	let data = $(this).data('modal');
	let shade = $("<div/>",{
		html: "",
		class: "modal-shade"
	});
	let close_mdl = $("<a/>",{
		html: "&#215;",
		class: "close-modal",
	});
	let window = $("<div/>",{
		html: data,
		class: "modal-window"
	});
	window.prepend(close_mdl);
	shade = $("<div/>",{
		html: "",
		class: "modal-shade"
	});
	$("body").prepend(shade,window);
	$(".modal-shade").fadeIn(350);
	$(".modal-window").show(350);
});
$(document).on("click",".modal-shade",function() {
	$(".modal-shade").fadeOut(200,function() {
		$(this).remove();
	});
	$(".modal-window").fadeOut(200,function() {
		$(this).remove();
	});
});
$(document).on("click",".close-modal",function() {
	$(".modal-shade").fadeOut(200,function() {
		$(this).remove();
	});
	$(".modal-window").fadeOut(200,function() {
		$(this).remove();
	});
});




/*SLIDESHOW from w3chools.com*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}