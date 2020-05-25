jQuery(document).ready(function($) {
    $(".boxicn").hover(
        function() {
            $(this).find('.icn i').addClass("animated rotateIn");
            $(this).find('.cnt h5').addClass("animated fadeInUp hoverh5");
        },
        function() {
            $(this).find('.icn i').removeClass("animated rotateIn");
            $(this).find('.cnt h5').removeClass("animated fadeInUp hoverh5");
        }
    );
});

$('.toorso-slider').owlCarousel({
    dots: false,
    loop: true,
    margin: 0,
    nav: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        }
    }
})

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $('.nav-link').addClass('padd2');
        $('.nav-brand').addClass('nav-brand2');
        $('.phone').addClass('phone2');
    } else {
        $('.nav-link').removeClass('padd2');
        $('.nav-brand').removeClass('nav-brand2');
        $('.phone').removeClass('phone2');
    }
})

$('.sections button').click(function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('.sections button.active').removeClass('active');
        $(this).addClass('active');
    }
});

var filterActive;

function filterCategory(category) {
    if (filterActive != category) {

        // reset results list
        $('.sections-res .port-img').removeClass('active');

        // elements to be filtered
        $('.sections-res .port-img')
            .filter('[data-cat="' + category + '"]')
            .addClass('active');

        // reset active filter
        filterActive = category;
        $('.sections button').removeClass('active');
    }
}

$('.port-img').addClass('active');

$('.sections button').click(function() {
    if ($(this).hasClass('all')) {
        $('.sections-res .port-img').addClass('active');
        filterActive = 'all';
        $('.sections button').removeClass('active');
    } else {
        filterCategory($(this).attr('data-cat'));
    }
    $(this).addClass('active');
});