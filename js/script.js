$(document).ready(function () {

    //humpurger toggle
    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });

    //click box icons
    let con = false;
    $('#box').click(function () {
        if (con == true) {
            $("#box").html('<i class="fas fa-cogs"></i>');
            $(".rightBox").css("right", "-15.5rem");
            $(".rightBoxData .box").css("right", "0rem");
            $(".up").css("z-index", '15');
            con = false;
        } else {
            $("#box").html('<i class="fas fa-times" style="color: rgb(201, 4, 4);">');
            $(".rightBox").css("right", "0rem");
            $(".rightBoxData .box").css("right", "15.5rem");
            $(".up").css("z-index", '10');
            con = true;
        }
    })

    // click color boxs
    let color = '#4caf50';
    $('.color').click(function () {
        color = $(this).css('background-color');
        hexc(color);
        function hexc(colorval) {
            let parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            delete (parts[0]);
            for (let i = 1; i <= 3; ++i) {
                parts[i] = parseInt(parts[i]).toString(16);
                if (parts[i].length == 1) parts[i] = '0' + parts[i];
            }
            color = '#' + parts.join('');
        }
        $('.bgTheme').css("background-color", color);
        $('.seTheme').css("background-color", color);
        $('.wTheme').css("background-color", color);
        $('.coTheme').css("color", color);
        $('.active .nav-border').css("background-color", color);
        if ($(window).scrollTop() < 200) {
            if ($(window).width() >= 1008) {
                $(".active a").css("color", "#fff");
                $(".form-inline .btn").css("background-color", "white");
                $(".form-inline .btn").css("color", "#555");
            } else {
                $(".active a").css("color", color);
                $(".form-inline .btn").css("background-color", color);
                $(".form-inline .btn").css("color", "#fff");
            }
        } else {
            $('.active a').css("color", color);
            $(".form-inline .btn").css("background-color", color);
            $(".form-inline .btn").css("color", "#fff");
        }
    });

    // click nav links
    $(".nav-link").click(function () {
        let hRef = $(this).attr("href");
        $('html, body').animate({ scrollTop: $(hRef).offset().top + 1 }, 1000);
    })

    //navbar resize
    $(window).resize(function () { navbar(); })

    //navbar
    function navbar() {
        if ($(window).width() >= 1008) {
            if ($(window).scrollTop() >= 200) {
                $("nav").eq(0).css("position", "fixed");
                $("nav").eq(0).css("background-color", "white");
                $("nav").addClass("shadow-sm");
                $(".fa-bars").css("color", "rgba(0, 0, 0, .7)");
                $(".nav-link").css("color", "#888");
                $("#brand").attr("src", "img/1.png");
                $("#nav").css("width", "90%");
                $("#nav").css("height", "50px");
                $(".form-inline .btn").css("background-color", color);
                $(".form-inline .btn").css("color", "#fff");
                $(".active a").css("color", color);
                $(".nav-border").each(function () {
                    $(this).css("top", "-.93rem");
                })
            } else {
                $("nav").eq(0).css("position", "fixed");
                $("nav").css("background-color", "transparent");
                $("nav").removeClass("shadow-sm");
                $(".fa-bars").css("color", "#fff");
                $(".nav-link").css("color", "#fff");
                $("#brand").attr("src", "img/logo-light.png");
                $("#nav").css("width", "95%");
                $("#nav").css("height", "60px");
                $(".form-inline .btn").css("background-color", "white");
                $(".form-inline .btn").css("color", "#555");
                $(".active a").css("color", "#fff");
                $(".nav-border").each(function () {
                    $(this).css("top", "-1.19rem");
                })
            }
        } else {
            $(".nav-link").css("color", "#888");
            $(".active a").css("color", color);
        }

        //navbar
        if ($(window).width() >= 1008) {
            $("#normal-navbar").show();
            $("#mobile-navbar").hide();
        } else {
            $("#normal-navbar").hide();
            $("#mobile-navbar").show();
        }

    }
    navbar();


    //scroll
    $(window).scroll(function () {

        //up button
        if ($(window).scrollTop() >= 320) {
            $(".up").css("display", "block");
        } else {
            $(".up").css("display", "none");
        }

        //counter
        if ($(window).scrollTop() >= ($(".icosection2").offset().top) - 500 && $(window).scrollTop() <= ($(".icosection2").offset().top + 120)) {
            counter();
        }

        navbar();
        nav_links();

    })

    // start & scroll nav-links
    function nav_links() {

        if ($(window).scrollTop() >= $("#home").offset().top && $(window).scrollTop() < $("#services").offset().top) {
            navLinks(0);
            if ($(window).scrollTop() >= 200) {
                $(".active a").css("color", color);
            } else {
                if ($(window).width() >= 1008) {
                    $(".active a").css("color", "#fff");
                } else {
                    $(".active a").css("color", color);
                }
            }
            navBorder(0);
        } else if ($(window).scrollTop() >= $("#services").offset().top && $(window).scrollTop() < $("#secret").offset().top) {
            navLinks(1);
            navBorder(1);
        } else if ($(window).scrollTop() >= $("#secret").offset().top && $(window).scrollTop() < $("#other").offset().top) {
            navLinks(2);
            navBorder(2);
        } else if ($(window).scrollTop() >= $("#other").offset().top && $(window).scrollTop() < $("#details").offset().top - 300) {
            navLinks(3);
            navBorder(3);
        } else {
            navLinks(4);
            navBorder(4);
        }

    }
    nav_links();

    //nav border
    function navBorder(x) {
        $(".nav-border").each(function () {
            $(this).css("background-color", "transparent");
        })
        $(".nav-border").eq(x).css("background-color", color);
    }

    //nav active&theme
    function navLinks(y) {
        $(".nav-link").each(function () {
            $(this).removeClass("coTheme");
        })
        $(".nav-item").each(function () {
            $(this).removeClass("active");
        })
        $(".nav-link").eq(y).addClass("coTheme");
        $(".nav-link").eq(y).parent().addClass("active");
    }

    //counter
    if ($(window).scrollTop() >= ($(".icosection2").offset().top) - 200 && $(window).scrollTop() <= ($(".icosection2").offset().top + 120)) {
        counter();
    }

    //counter
    function counter() {
        $('.counter').each(function () {
            var $this = $(this), countTo = $this.attr('data-count');
            $(
                { countNum: $this.text() }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
        });
    }

    // hover nav button
    $(".form-inline .btn").mouseover(function () {
        if ($(window).scrollTop() >= 200) {
            $(this).css("opacity", ".7");
        } else {
            if ($(window).width() >= 1008) {
                $(this).css("background-color", color);
                $(this).css("color", "white");
            } else {
                $(this).css("background-color", "#555");
                $(this).css("color", "white");
            }
        }
    })
    $(".form-inline .btn").mouseout(function () {
        if ($(window).scrollTop() >= 200) {
            $(this).css("background-color", color);
            $(this).css("color", "#fff");
            $(this).css("opacity", "1");
        } else {
            if ($(window).width() >= 1008) {
                $(this).css("background-color", "#fff");
                $(this).css("color", "#555");
            } else {
                $(this).css("background-color", color);
                $(this).css("color", "#fff");
            }
        }
    })

    // hover additional button
    $(".services .learn a").mouseover(function () {
        $(this).css('color', color);
        $(this).children().css("left", "10px").css('color', color);
    });
    $(".services .learn a").mouseout(function () {
        $(this).css('color', '#373a3c');
        $(this).children().css("left", "3px").css('color', '#373a3c');
    });

    //  hover secret button
    $(".secbtn").mouseover(function () {
        $(this).css('background-color', '#555');
        $(this).css('color', '#fff');
    });
    $(".secbtn").mouseout(function () {
        $(this).css('background-color', color);
        $(this).css('color', '#fff');
    });

    //  hover secret button
    $(".comment-dots span").mouseover(function () {
        $(this).css('background-color', color);
        $(this).css('color', "#fff");
        $(this).css('border-color', color);
    });
    $(".comment-dots span").mouseout(function () {
        $(this).css('background-color', 'transparent');
        $(this).css('color', "rgba(0,0,0,.2)");
        $(this).css('border-color', 'rgba(0,0,0,.15)');
    });

    // hover nav links
    $(".nav-link").mouseover(function () {
        if ($(window).scrollTop() >= 200) {
            $(this).css("color", color);
        } else {
            if ($(window).width() < 1008) {
                $(this).css("color", color);
            }
        }
    })
    $(".nav-link").mouseout(function () {
        if ($(window).scrollTop() >= 200) {
            $(this).css("color", "#888");
            $(".active a").css("color", color);
        } else {
            if ($(window).width() >= 1008) {
                $(this).css("color", "#fff");
            } else {
                $(this).css("color", "#888");
                $(".active a").css("color", color);
            }
        }
    })

    //click up button
    $(".up").click(function () {
        $('html, body').animate({ scrollTop: 0 }, $(window).scrollTop() / 2);
    })

    //click show more
    $(".moredetails").fadeOut();
    let showCondition = true;
    $(".more").click(function () {
        $('.moredetails').fadeToggle(500);
        if (showCondition == true) {
            showCondition = false;
            $(".more").html('show less');
        } else {
            showCondition = true;
            $(".more").html('... show more');
        }
    })

    //comments carousel
    $("#team-carousel").owlCarousel({
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    //click owl span
    $('.prev').click(function () {
        $("#team-carousel").trigger('prev.owl.carousel');
    })
    $('.next').click(function () {
        $("#team-carousel").trigger('next.owl.carousel');
    })

    //brands carousel
    $("#works-carousel").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3,
                margin: 30
            },
            800: {
                items: 4,
                margin: 40
            },
            1000: {
                items: 5,
                margin: 50
            }
        }
    });

    //spanner
    $(".spinner").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });

})

/*El-Sman*/