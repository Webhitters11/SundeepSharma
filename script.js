$(document).ready(function() {
    // Preloader fade out
    var text = "Laugh Out Loud with Sundeep Sharma";
    var index = 0;
    var typingSpeed = 100;
    var audio = new Audio('type-sound.mp3'); 

    function typeWriter() {
        if (index < text.length) {
            $("#typing-text").append(text.charAt(index));

            // Play typing sound
            audio.currentTime = 0;
            audio.play();

            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(function () {
                $(".preloader").fadeOut(500, function () {
                    $(".hero-section").fadeIn(500); 
                    
                    $(".hero-frame").css({
                        'top': '0',      
                        'opacity': '1'   
                    });
                });
            }, 1000); 
        }
    }

    typeWriter();
});
$(document).ready(function() {
    
    $('.nav-icon').click(function() {
       
        $('.nav-menu').toggleClass('active');
        
      
        if ($('.nav-menu').hasClass('active')) {
            $('.nav-menu ul li').each(function(index) {
                $(this).delay(index * 300).queue(function(next) {
                    $(this).css({
                        'opacity': 1,
                        'transform': 'translateX(0)'
                    });
                    next();
                });
            });

            
            setTimeout(function() {
                $('.nav-menu').removeClass('active');
                $('.nav-menu ul li').css({
                    'opacity': 0,
                    'transform': 'translateX(100px)' 
                });
            }, 5000); 
        }
    });
});
$(document).ready(function () {
    $('#comedyCarousel').carousel({
        interval: 1000, 
        ride: 'carousel'
    });
});
$(document).ready(function () {
   
    $(".title").hide().fadeIn(2000);
    $(".description").hide().delay(500).fadeIn(2000);
    $(".btn").hide().delay(1000).fadeIn(2000);

    // Hover effect on images
    $(".image-frame img").hover(
        function () {
            $(this).css("transform", "scale(1.1)");
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    );

    // Smooth scroll effect for booking button
    $(".btn").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $(".comedian-section").offset().top,
            },
            1000
        );
    });
});
