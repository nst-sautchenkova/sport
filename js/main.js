//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('#cube-loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
	$('body').removeClass('js-loading');

	
	$('.start-anim').addClass('anim');
});


$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.js-animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});



// CATALOG
$(document).on("ready", function () {
	$(".сard_product .buy-btn").click(function () {
		$(this).toggleClass('active');
		$(this).parents('.сard_product').toggleClass('quick');
	});
});


$(document).on("ready", function () {
	$(".сard_product .quick-order .chose span").click(function () {
		$(".сard_product .quick-order .chose span").removeClass('active');
		$(this).addClass('active');
	});
});

$(document).on("ready", function () {
	$(".сard_product .color-block .color").click(function () {
		$(".сard_product .color-block .color").removeClass('active');
		$(this).addClass('active');
	});
});
$(document).on("ready", function () {
	$("#product_one-specification .param .chose span").click(function () {
		$("#product_one-specification .param .chose span").removeClass('active');
		$(this).addClass('active');
	});
});

$(document).on("ready", function () {
	$("#product_one-specification .param .color span").click(function () {
		$("#product_one-specification .param .color span").removeClass('active');
		$(this).addClass('active');
	});
});

$(document).on("ready", function () {
	$(".сard_product .like").click(function () {
		$(this).toggleClass('active');
	});
});

$(document).on("ready", function () {
	$(".сard_product .compare").click(function () {
		$(this).toggleClass('active');
	});
});
$(document).on("ready", function () {
	$("#catalog_list-sorting li").click(function () {
		$("#catalog_list-sorting li").removeClass('active');
		$(this).addClass('active');
	});
});

$("#catalog_filter .f-header").click(function () {
	$(this).toggleClass('active');
	$("#catalog_filter .f-body").slideToggle('normal');
});
		
						
//modal
$('.modal-block').on('click', function(){
	var	id =  this.id;
  $(".modal[data-id='#"+id+"']").toggleClass('open');
  $(".modal-ov").show("slow");
  $("body").addClass("open-hidden");
  
});

$(".close").click(function () {
	$(".modal-content").addClass('modal');
	$(".modal-content.modal").css({'transform':'translateY(-100%)'});
	$(".modal-ov").hide("slow");
	$("#profit-calculator .sel-tree").removeClass('none');
	function func() {
		$(".modal").removeClass("open");
		$("body").removeClass("open-hidden");
		$(".modal-content").removeClass('modal');
		$(".modal-content").css({'transform':'translateY(0)'});
	}
	setTimeout(func, 300);
	
});

$(".modal-ov").click(function () {
	$(".modal-content").addClass('modal');
	$(".modal-content.modal").css({'transform':'translateY(-100%)'});
	$(".modal-ov").hide("slow");
	$("#profit-calculator .sel-tree").removeClass('none');
	function func() {
		$(".modal").removeClass("open");
		$("body").removeClass("open-hidden");
		$(".modal-content").removeClass('modal');
		$(".modal-content").css({'transform':'translateY(0)'});
	}
	setTimeout(func, 300);
	
});


$(document).on("ready", function () {
	$(".modal-quick .add-comment .add").click(function () {
		$(this).parent(".add-comment").addClass("active");
	});
});

//select
$(document).ready(function(){
	$(".select-block .select_header").click(function(){
		$(this).toggleClass('open');
		$(this).parents('.select-block').toggleClass('open');

		$(".open .select_body li").click(function(){
			$('.open .select_header span').text($(this).text());
			$(".select-block").removeClass('open');	
		});
	});		
})


/*MENU*/
$(document).on("ready", function () {
    $("#navigation .cd-nav-trigger").click(function () {
        $("#navigation").toggleClass("menu-open");
		$(".nav-bar").toggleClass("open-menu");
		$('#navigation .bar').toggleClass('animate');
		$("body").toggleClass("open-menu");
    });
	
});



//Минус плюс
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});	



$(document).ready(function () {
	$(".password .p-show").click(function () {
		$('.password').removeClass('active');
		$(this).parents('.password').toggleClass('active');
		
		if ($(".password.active .input-password").attr("type") === "password") {
			$(".password.active .input-password").attr("type", "text");
		} else {
			$(".password.active .input-password").attr("type", "password");
		}
	});
});