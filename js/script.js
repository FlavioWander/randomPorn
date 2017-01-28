function setActive(d,index){
	$("li").removeClass("active");
	$(d).addClass("active");	
}

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

function navbarCheck(){
    if($(window).width() <= 767){        
        $("#mainNavbar").removeClass("mainNavbarFull");
        $("#mainNavbar").removeClass("mainNavbarLogo");
    }
    $('#mainBackground').css({'background-image': 'url(img/'+(Math.floor(Math.random()*10000)%20)+'.jpg)'});
}

$(window).load(navbarCheck);

$(window).scroll(function () {
    var e = $(this).scrollTop();
    if (e > 120) {
    	$("#iconLogo").removeClass("brandIconLogo");
    	$("#iconLogo").addClass("brandIconFull");
    	$("#mainNavbar").removeClass("mainNavbarLogo");
    	$("#mainNavbar").addClass("mainNavbarFull");
    } else {
    	$("#iconLogo").removeClass("brandIconFull");
    	$("#iconLogo").addClass("brandIconLogo");
    	$("#mainNavbar").removeClass("mainNavbarFull");
    	$("#mainNavbar").addClass("mainNavbarLogo");
    }
});