// MENU HAMBURGUESA
$(document).ready(function () {
    const $navbarToggler = $(".navbar-toggler");
    const $navbarCollapse = $("#navbarNav");

    $navbarToggler.on("click", function () {
        $navbarCollapse.toggleClass("show");
    });
});




// LOGO MADTRENDS 
  $(document).ready(function() {
    const $logo = $('#logo');
    const originalSrc = 'img/Home/KUCAlogoblanco.png'; 
    const hoverSrc = 'img/Home/KUCAlogonegro.png'; 
    const buttonHoverSrc = 'img/Home/KUCAlogoverde.png'; 
    const $menu = $('.menu');
    const $navbarToggler = $('.navbar-toggler');
    const $submenu = $('#navbarNav');

    $menu.on('mouseenter', function() {
        $logo.attr('src', hoverSrc);
    });

    $menu.on('mouseleave', function() {
        if (!$logo.is(':hover')) {
            $logo.attr('src', originalSrc); 
        }
    });

    $logo.on('mouseenter', function() {
        $logo.attr('src', buttonHoverSrc);
    });

    $logo.on('mouseleave', function() {
        if ($menu.is(':hover')) {
            $logo.attr('src', hoverSrc); 
        } else {
            $logo.attr('src', originalSrc);
        }
    });

    $logo.on('click', function() {
        window.location.href = 'index.html'; 
    });

    $navbarToggler.on('click', function() {
        $submenu.toggleClass('show'); 
    });
});


// CARRUSEL
$(document).ready(function(){
    $('.slick-carousel').slick({
        infinite: true, 
        speed: 700, 
        slidesToShow: 4.5, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 100, 
        arrows: false, 
        responsive: [ 
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


// AOS
$(document).ready(function(){
    AOS.init({
        offset: 90,      
        delay: 0,        
        duration: 300, 
        easing: 'ease-in-out', 
        once: true       
    });
});

// Detecta el scroll para cambiar los colores
$(window).scroll(function() {
    const scrollTrigger = 100; // Ajusta este valor según cuándo quieras que cambien los colores
    const $navbarToggler = $('.navbar-toggler');
    const $btnSubscribe = $('.menu .btn-light');
    const $btnSignIn = $('.menu .btn-outline-light');

    if ($(this).scrollTop() > scrollTrigger) {
        $navbarToggler.addClass('scrolled');
        $btnSubscribe.addClass('scrolled');
        $btnSignIn.addClass('scrolled');
    } else {
        $navbarToggler.removeClass('scrolled');
        $btnSubscribe.removeClass('scrolled');
        $btnSignIn.removeClass('scrolled');
    }
});