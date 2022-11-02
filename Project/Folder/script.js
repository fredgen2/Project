$(document).ready(()=> {
  'use strict';

    var owl = $('.owl-carousel'),
        item,
        itemsBgArray = [], 
        itemBGImg;
  
    owl.owlCarousel({  
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 1000,
        loop: true,
        nav: true,
        navText: false,
        onTranslated: function () {
            changeNavsThump();
        }
    });
  
    $('.active').addClass('anim');
  
    var owlItem = $('.owl-item'),
        owlLen = owlItem.length;
   
    $.each(owlItem, function( i, e ) {
        itemBGImg = $(e).find('.owl-item-bg').attr('src');
        itemsBgArray.push(itemBGImg);
    });
    
    var owlNav = $('.owl-nav'),
        el;
    
    $.each(owlNav.children(), function (i,e) {
        el = $(e);
        el.append('<div class="'+ el.attr('class').match(/owl-\w{4}/) +'-thump">');
        el.append('<div class="'+ el.attr('class').match(/owl-\w{4}/) +'-icon">');
    });
    
    
    function changeNavsThump() {
        var activeItemIndex = parseInt($('.owl-item.active').index()),
          
            prevItemIndex = activeItemIndex != 0 ? activeItemIndex - 1 : owlLen - 1,
           
            nextItemIndex = activeItemIndex != owlLen - 1 ? activeItemIndex + 1 : 0;
        
        $('.owl-prev-thump').css({
            backgroundImage: 'url(' + itemsBgArray[prevItemIndex] + ')'
        });
        
        $('.owl-next-thump').css({
            backgroundImage: 'url(' + itemsBgArray[nextItemIndex] + ')'
        });
    }
    changeNavsThump();
});




jQuery(function($)
{
    $(".hamburger").click(function()
    {
        $(".navigation").toggleClass("open");
        $(".bg-overlay").toggleClass("open1");
    })
	var bodyEl = document.body,
    content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, '.show-menu' );
		}
		else {
			classie.add( bodyEl, '.show-menu' );
		}
		isOpen = !isOpen;
	}
	$(document).mouseup(function (e){ 
		var div = $(".navigation");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
      $('.navigation').removeClass('open');
      $(".bg-overlay").removeClass("open1");
		}
	});  

	init();  
});