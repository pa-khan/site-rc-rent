$(document).ready(function($) {

	/* Phone mask */
	$('.input[name = phone]').mask('+9 (999) 999-99-99');
	
	
	var windowHeight = $(window).height();

	console.log(windowHeight);

	$('.cars__button').click(function(event) {
		$('.cars__item_hidden').css('display', 'inline-block');
		$('.cars__list').css('padding-bottom', '40px');
		$(this).hide();
	});


	var classSelected = 'selected';

	


	$('.cars__nav li').click(function(event) {
		event.preventDefault();

		navSelectItem($(this));
		
	});

	function navSelectItem(item) {
		if (!item.hasClass(classSelected)) {
			navUnSelectedRemove(item);

			var itemLink = item.find('a');
			selectedItem(itemLink);
		}
	}

	function navUnSelectedRemove(item) {
		$('.cars__nav li').removeClass(classSelected)
		item.addClass(classSelected);
	}

	function selectedItem(item) {
		var itemType = item.attr('href');
				itemType = itemType.replace('#','');
		
		$('.cars__item').each(function(index, el) {
			if (!($(this).hasClass('cars__item_hidden'))) {
				$('.cars__item').removeAttr('style');
			}
		});
		if (!(itemType == 'all')) {
			$('.cars__item').hide();
			$('.cars__item[data-car-type = ' + itemType + ']').css('display', 'inline-block');
		}
	}



	// $('.car__images-button').click(function(event) {
	// 	$('.car__image_hidden').css('display', 'inline-block');
	// 	$(this).hide();
	// });


	var mobileBtn = $('.header__btn-nav'),
			mobileNav = $('.header__nav');

	mobileBtn.click(function(event) {
		$(this).toggleClass('header__btn-nav_toggle');
		mobileNav.toggleClass('header__nav_toggle');
	});

	$('.contacts__form form').submit(function() {
		$.ajax({
		    type: "POST",
		    url: "/order.php",
		    data: $(this).serialize()
		}).done(function() {
			
		   $.fancybox.open('<div class="successfully">Your application has been submitted! <br />In the near future we will contact you!</div>');
		});
		return false;
	});

	$('.popup form').submit(function() {
		$.ajax({
		    type: "POST",
		    url: "/order.php",
		    data: $(this).serialize()
		}).done(function() {
			parent.jQuery.fancybox.getInstance().close();
		  $.fancybox.open('<div class="successfully">Your application has been submitted! <br />In the near future we will contact you!</div>');
		});
		return false;
	});

	$('input[name = time]').timepicker();

	$('input[name = date]').datepicker();


	$('.car__button').click(function() {
		var text = $('.car__title').html();
		$('.popup__input[name = car]').val(text);
	});
});