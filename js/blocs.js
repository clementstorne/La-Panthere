<<<<<<< HEAD
function setUpSpecialNavs(){$(".navbar-toggle").click(function(f){var g=$(this).closest("nav"),d=g.find("ul.site-navigation"),c=d.clone();if(d.parent().hasClass("nav-special")){if(f.stopPropagation(),$(this).hasClass("selected-nav")){$(".blocsapp-special-menu blocsnav").removeClass("open"),$(".selected-nav").removeClass("selected-nav"),setTimeout(function(){$(".blocsapp-special-menu").remove(),$("body").removeClass("lock-scroll"),$(".selected-nav").removeClass("selected-nav")},300)}else{$(this).addClass("selected-nav");var h=g.attr("class").replace("navbar","").replace("row",""),b=d.parent().attr("class").replace("navbar-collapse","").replace("collapse","");($(".content-tint").length=-1)&&$("body").append('<div class="content-tint"></div>'),c.insertBefore(".page-container").wrap('<div class="blocsapp-special-menu '+h+'"><blocsnav class="'+b+'">'),$("blocsnav").prepend('<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><div class="close-icon"></div></a>'),function(){var j="fadeInRight",k=0,a=60;$(".blocsapp-special-menu blocsnav").hasClass("fullscreen-nav")?(j="fadeIn",a=100):$(".blocsapp-special-menu").hasClass("nav-invert")&&(j="fadeInLeft");$(".blocsapp-special-menu blocsnav li").each(function(){$(this).parent().hasClass("dropdown-menu")?$(this).addClass("animated fadeIn"):(k+=a,$(this).attr("style","animation-delay:"+k+"ms").addClass("animated "+j))})}(),setTimeout(function(){$(".blocsapp-special-menu blocsnav").addClass("open"),$(".content-tint").addClass("on"),$("body").addClass("lock-scroll")},10)}}}),$("body").on("mousedown touchstart",".content-tint, .close-special-menu",function(a){$(".content-tint").removeClass("on"),$(".selected-nav").click(),setTimeout(function(){$(".content-tint").remove()},10)}).on("click",".blocsapp-special-menu a",function(a){$(a.target).closest(".dropdown-toggle").length||$(".close-special-menu").mousedown()})}function extraNavFuncs(){$(".site-navigation a").click(function(a){$(a.target).closest(".dropdown-toggle").length||$(".navbar-collapse").collapse("hide")}),$("a.dropdown-toggle").click(function(a){$(this).parent().addClass("target-open-menu"),$(this).closest(".dropdown-menu").find(".dropdown.open").each(function(b){$(this).hasClass("target-open-menu")||$(this).removeClass("open")}),$(".target-open-menu").removeClass("target-open-menu")})}function setFillScreenBlocHeight(){$(".bloc-fill-screen").each(function(a){var b=$(this);window.fillBodyHeight=0,$(this).find(".container").each(function(c){fillPadding=2*parseInt($(this).css("padding-top")),b.hasClass("bloc-group")?fillBodyHeight=fillPadding+$(this).outerHeight()+50:fillBodyHeight=fillBodyHeight+fillPadding+$(this).outerHeight()+50}),$(this).css("height",getFillHeight()+"px")})}function getFillHeight(){var a=$(window).height();return a<fillBodyHeight&&(a=fillBodyHeight+100),a}function scrollToTarget(a){1==a?a=0:2==a?a=$(document).height():(a=$(a).offset().top,$(".sticky-nav").length&&(a-=$(".sticky-nav .navbar-header").height())),$("html,body").animate({scrollTop:a},"slow"),$(".navbar-collapse").collapse("hide")}function animateWhenVisible(){hideAll(),inViewCheck(),$(window).scroll(function(){inViewCheck(),scrollToTopView(),stickyNavToggle()})}function setUpDropdownSubs(){$("ul.dropdown-menu [data-toggle=dropdown]").on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open");var b=$(this).parent().children(".dropdown-menu");b.offset().left+b.width()>$(window).width()&&b.addClass("dropmenu-flow-right")})}function stickyNavToggle(){var b=0,c="sticky";if($(".sticky-nav").hasClass("fill-bloc-top-edge")){var a=$(".fill-bloc-top-edge.sticky-nav").parent().css("background-color");"rgba(0, 0, 0, 0)"==a&&(a="#FFFFFF"),$(".sticky-nav").css("background",a),b=$(".sticky-nav").height(),c="sticky animated fadeInDown"}$(window).scrollTop()>b?($(".sticky-nav").addClass(c),"sticky"==c&&$(".page-container").css("padding-top",$(".sticky-nav").height())):($(".sticky-nav").removeClass(c).removeAttr("style"),$(".page-container").removeAttr("style"))}function hideAll(){$(".animated").each(function(a){$(this).closest(".hero").length||$(this).removeClass("animated").addClass("hideMe")})}function inViewCheck(){$($(".hideMe").get().reverse()).each(function(d){var f=jQuery(this),c=f.offset().top+f.height(),b=$(window).scrollTop()+$(window).height();if(f.height()>$(window).height()&&(c=f.offset().top),c<b){var g=f.attr("class").replace("hideMe","animated");f.css("visibility","hidden").removeAttr("class"),setTimeout(function(){f.attr("class",g).css("visibility","visible")},0.01)}})}function scrollToTopView(){$(window).scrollTop()>$(window).height()/3?$(".scrollToTop").hasClass("showScrollTop")||$(".scrollToTop").addClass("showScrollTop"):$(".scrollToTop").removeClass("showScrollTop")}function setUpVisibilityToggle(){$(document).on("click","[data-toggle-visibility]",function(d){d.preventDefault();var f=$(this).attr("data-toggle-visibility");if(-1!=f.indexOf(",")){var c=f.split(",");$.each(c,function(a){b($("#"+c[a]))})}else{b($("#"+f))}function b(a){a.is("img")?a.toggle():a.slideToggle()}})}function setUpLightBox(){window.targetLightbox,$(document).on("click","[data-lightbox]",function(f){f.preventDefault(),targetLightbox=$(this);var h=targetLightbox.attr("data-lightbox"),d=targetLightbox.attr("data-autoplay"),c='<p class="lightbox-caption">'+targetLightbox.attr("data-caption")+"</p>",j="no-gallery-set",b=targetLightbox.attr("data-frame");targetLightbox.attr("data-gallery-id")&&(j=targetLightbox.attr("data-gallery-id")),targetLightbox.attr("data-caption")||(c="");var k="";1==d&&(k="autoplay");var g=$('<div id="lightbox-modal" class="modal fade"><div class="modal-dialog"><div class="modal-content '+b+' blocs-lb-container"><button id="blocs-lightbox-close-btn" type="button" class="close-lightbox" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="modal-body"><a href="#" class="prev-lightbox" aria-label="prev"><span class="fa fa-chevron-left"></span></a><a href="#" class="next-lightbox" aria-label="next"><span class="fa fa-chevron-right"></span></a><img id="lightbox-image" class="img-responsive" src="'+h+'"><div id="lightbox-video-container" class="embed-responsive embed-responsive-16by9"><video controls '+k+' class="embed-responsive-item"><source id="lightbox-video" src="'+h+'" type="video/mp4"></video></div>'+c+"</div></div></div></div>");$("body").append(g),"fullscreen-lb"==b&&($("#lightbox-modal").addClass("fullscreen-modal").append('<a class="close-full-screen-modal animated fadeIn" style="animation-delay:0.5s;" onclick="$(\'#lightbox-modal\').modal(\'hide\');"><div class="close-icon"></div></a>'),$("#blocs-lightbox-close-btn").remove()),".mp4"==h.substring(h.length-4)?($("#lightbox-image, .lightbox-caption").hide(),$("#lightbox-video-container").show()):($("#lightbox-image,.lightbox-caption").show(),$("#lightbox-video-container").hide()),$("#lightbox-modal").modal("show"),"no-gallery-set"==j?(0==$("a[data-lightbox]").index(targetLightbox)&&$(".prev-lightbox").hide(),$("a[data-lightbox]").index(targetLightbox)==$("a[data-lightbox]").length-1&&$(".next-lightbox").hide()):(0==$('a[data-gallery-id="'+j+'"]').index(targetLightbox)&&$(".prev-lightbox").hide(),$('a[data-gallery-id="'+j+'"]').index(targetLightbox)==$('a[data-gallery-id="'+j+'"]').length-1&&$(".next-lightbox").hide()),addLightBoxSwipeSupport()}).on("hidden.bs.modal","#lightbox-modal",function(){$("#lightbox-modal").remove()}),$(document).on("click",".next-lightbox, .prev-lightbox",function(f){f.preventDefault();var g="no-gallery-set",d=$("a[data-lightbox]").index(targetLightbox),c=$("a[data-lightbox]").eq(d+1);targetLightbox.attr("data-gallery-id")&&(g=targetLightbox.attr("data-gallery-id"),d=$('a[data-gallery-id="'+g+'"]').index(targetLightbox),c=$('a[data-gallery-id="'+g+'"]').eq(d+1)),$(this).hasClass("prev-lightbox")&&(c=$('a[data-gallery-id="'+g+'"]').eq(d-1),"no-gallery-set"==g&&(c=$("a[data-lightbox]").eq(d-1)));var h=c.attr("data-lightbox");if(".mp4"==h.substring(h.length-4)){var b="";1==c.attr("data-autoplay")&&(b="autoplay"),$("#lightbox-image, .lightbox-caption").hide(),$("#lightbox-video-container").show().html("<video controls "+b+' class="embed-responsive-item"><source id="lightbox-video" src="'+h+'" type="video/mp4"></video>')}else{$("#lightbox-image").attr("src",h).show(),$(".lightbox-caption").html(c.attr("data-caption")).show(),$("#lightbox-video-container").hide()}targetLightbox=c,$(".next-lightbox, .prev-lightbox").hide(),"no-gallery-set"==g?($("a[data-lightbox]").index(c)!=$("a[data-lightbox]").length-1&&$(".next-lightbox").show(),$("a[data-lightbox]").index(c)>0&&$(".prev-lightbox").show()):($('a[data-gallery-id="'+g+'"]').index(c)!=$('a[data-gallery-id="'+g+'"]').length-1&&$(".next-lightbox").show(),$('a[data-gallery-id="'+g+'"]').index(c)>0&&$(".prev-lightbox").show())})}function addSwipeSupport(){$(".carousel-inner").length&&$(".carousel-inner").swipe({swipeLeft:function(d,f,c,b,g){$(this).parent().carousel("next")},swipeRight:function(){$(this).parent().carousel("prev")},threshold:0})}function addKeyBoardSupport(){$(window).keydown(function(a){37==a.which?$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click():39==a.which&&$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()})}function addLightBoxSwipeSupport(){$("#lightbox-image").length&&$("#lightbox-image").swipe({swipeLeft:function(d,f,c,b,g){$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()},swipeRight:function(){$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click()},threshold:0})}$(document).ready(function(){$("#scroll-hero").click(function(a){a.preventDefault(),$("html,body").animate({scrollTop:$("#scroll-hero").closest(".bloc").height()},"slow")}),extraNavFuncs(),setUpSpecialNavs(),setUpDropdownSubs(),setUpLightBox(),setUpVisibilityToggle(),addSwipeSupport(),addKeyBoardSupport(),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&$("#page-loading-blocs-notifaction").remove()}),$(window).load(function(){setFillScreenBlocHeight(),animateWhenVisible(),$("#page-loading-blocs-notifaction").remove()}).resize(function(){setFillScreenBlocHeight()}),$(function(){$('[data-toggle="tooltip"]').tooltip()});
=======
// Blocs.js Minified
function setUpSpecialNavs() {
    $(".navbar-toggle").click(function(t) {
        var e = $(this).closest("nav"),
            i = e.find("ul.site-navigation"),
            a = i.clone();
        if (i.parent().hasClass("nav-special"))
            if (t.stopPropagation(), $(this).hasClass("selected-nav")) $(".blocsapp-special-menu blocsnav").removeClass("open"), $(".selected-nav").removeClass("selected-nav"), setTimeout(function() {
                $(".blocsapp-special-menu").remove(), $("body").removeClass("lock-scroll"), $(".selected-nav").removeClass("selected-nav")
            }, 300);
            else {
                $(this).addClass("selected-nav");
                var o = e.attr("class").replace("navbar", "").replace("row", ""),
                    l = i.parent().attr("class").replace("navbar-collapse", "").replace("collapse", "");
                ($(".content-tint").length = -1) && $("body").append('<div class="content-tint"></div>'), a.insertBefore(".page-container").wrap('<div class="blocsapp-special-menu ' + o + '"><blocsnav class="' + l + '">'), $("blocsnav").prepend('<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><div class="close-icon"></div></a>'),
                    function() {
                        var t = "fadeInRight",
                            e = 0,
                            i = 60;
                        $(".blocsapp-special-menu blocsnav").hasClass("fullscreen-nav") ? (t = "fadeIn", i = 100) : $(".blocsapp-special-menu").hasClass("nav-invert") && (t = "fadeInLeft");
                        $(".blocsapp-special-menu blocsnav li").each(function() {
                            $(this).parent().hasClass("dropdown-menu") ? $(this).addClass("animated fadeIn") : (e += i, $(this).attr("style", "animation-delay:" + e + "ms").addClass("animated " + t))
                        })
                    }(), setTimeout(function() {
                        $(".blocsapp-special-menu blocsnav").addClass("open"), $(".content-tint").addClass("on"), $("body").addClass("lock-scroll")
                    }, 10)
            }
    }), $("body").on("mousedown touchstart", ".content-tint, .close-special-menu", function(t) {
        $(".content-tint").removeClass("on"), $(".selected-nav").click(), setTimeout(function() {
            $(".content-tint").remove()
        }, 10)
    }).on("click", ".blocsapp-special-menu a", function(t) {
        $(t.target).closest(".dropdown-toggle").length || $(".close-special-menu").mousedown()
    })
}

function extraNavFuncs() {
    $(".site-navigation a").click(function(t) {
        $(t.target).closest(".dropdown-toggle").length || $(".navbar-collapse").collapse("hide")
    }), $("a.dropdown-toggle").click(function(t) {
        $(this).parent().addClass("target-open-menu"), $(this).closest(".dropdown-menu").find(".dropdown.open").each(function(t) {
            $(this).hasClass("target-open-menu") || $(this).removeClass("open")
        }), $(".target-open-menu").removeClass("target-open-menu")
    })
}

function setFillScreenBlocHeight() {
    $(".bloc-fill-screen").each(function(t) {
        var e = $(this);
        window.fillBodyHeight = 0, $(this).find(".container").each(function(t) {
            fillPadding = 2 * parseInt($(this).css("padding-top")), e.hasClass("bloc-group") ? fillBodyHeight = fillPadding + $(this).outerHeight() + 50 : fillBodyHeight = fillBodyHeight + fillPadding + $(this).outerHeight() + 50
        }), $(this).css("height", getFillHeight() + "px")
    })
}

function getFillHeight() {
    var t = $(window).height();
    return t < fillBodyHeight && (t = fillBodyHeight + 100), t
}

function scrollToTarget(t) {
    1 == t ? t = 0 : 2 == t ? t = $(document).height() : (t = $(t).offset().top, $(".sticky-nav").length && (t -= $(".sticky-nav .navbar-header").height())), $("html,body").animate({
        scrollTop: t
    }, "slow"), $(".navbar-collapse").collapse("hide")
}

function animateWhenVisible() {
    hideAll(), inViewCheck(), $(window).scroll(function() {
        inViewCheck(), scrollToTopView(), stickyNavToggle()
    })
}

function setUpDropdownSubs() {
    $("ul.dropdown-menu [data-toggle=dropdown]").on("click", function(t) {
        t.preventDefault(), t.stopPropagation(), $(this).parent().siblings().removeClass("open"), $(this).parent().toggleClass("open");
        var e = $(this).parent().children(".dropdown-menu");
        e.offset().left + e.width() > $(window).width() && e.addClass("dropmenu-flow-right")
    })
}

function stickyNavToggle() {
    var t = 0,
        e = "sticky";
    if ($(".sticky-nav").hasClass("fill-bloc-top-edge")) {
        var i = $(".fill-bloc-top-edge.sticky-nav").parent().css("background-color");
        "rgba(0, 0, 0, 0)" == i && (i = "#FFFFFF"), $(".sticky-nav").css("background", i), t = $(".sticky-nav").height(), e = "sticky animated fadeInDown"
    }
    $(window).scrollTop() > t ? ($(".sticky-nav").addClass(e), "sticky" == e && $(".page-container").css("padding-top", $(".sticky-nav").height())) : ($(".sticky-nav").removeClass(e).removeAttr("style"), $(".page-container").removeAttr("style"))
}

function hideAll() {
    $(".animated").each(function(t) {
        $(this).closest(".hero").length || $(this).removeClass("animated").addClass("hideMe")
    })
}

function inViewCheck() {
    $($(".hideMe").get().reverse()).each(function(t) {
        var e = jQuery(this),
            i = e.offset().top + e.height(),
            a = $(window).scrollTop() + $(window).height();
        if (e.height() > $(window).height() && (i = e.offset().top), i < a) {
            var o = e.attr("class").replace("hideMe", "animated");
            e.css("visibility", "hidden").removeAttr("class"), setTimeout(function() {
                e.attr("class", o).css("visibility", "visible")
            }, .01)
        }
    })
}

function scrollToTopView() {
    $(window).scrollTop() > $(window).height() / 3 ? $(".scrollToTop").hasClass("showScrollTop") || $(".scrollToTop").addClass("showScrollTop") : $(".scrollToTop").removeClass("showScrollTop")
}

function setUpVisibilityToggle() {
    $(document).on("click", "[data-toggle-visibility]", function(t) {
        t.preventDefault();
        var e = $(this).attr("data-toggle-visibility");
        if (-1 != e.indexOf(",")) {
            var i = e.split(",");
            $.each(i, function(t) {
                a($("#" + i[t]))
            })
        } else a($("#" + e));

        function a(t) {
            t.is("img") ? t.toggle() : t.slideToggle()
        }
    })
}

function setUpLightBox() {
    window.targetLightbox, $(document).on("click", "[data-lightbox]", function(t) {
        t.preventDefault(), targetLightbox = $(this);
        var e = targetLightbox.attr("data-lightbox"),
            i = targetLightbox.attr("data-autoplay"),
            a = '<p class="lightbox-caption">' + targetLightbox.attr("data-caption") + "</p>",
            o = "no-gallery-set",
            l = targetLightbox.attr("data-frame");
        targetLightbox.attr("data-gallery-id") && (o = targetLightbox.attr("data-gallery-id")), targetLightbox.attr("data-caption") || (a = "");
        var n = "";
        1 == i && (n = "autoplay");
        var s = $('<div id="lightbox-modal" class="modal fade"><div class="modal-dialog"><div class="modal-content ' + l + ' blocs-lb-container"><button id="blocs-lightbox-close-btn" type="button" class="close-lightbox" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="modal-body"><a href="#" class="prev-lightbox" aria-label="prev"><span class="fa fa-chevron-left"></span></a><a href="#" class="next-lightbox" aria-label="next"><span class="fa fa-chevron-right"></span></a><img id="lightbox-image" class="img-responsive" src="' + e + '"><div id="lightbox-video-container" class="embed-responsive embed-responsive-16by9"><video controls ' + n + ' class="embed-responsive-item"><source id="lightbox-video" src="' + e + '" type="video/mp4"></video></div>' + a + "</div></div></div></div>");
        $("body").append(s), "fullscreen-lb" == l && ($("#lightbox-modal").addClass("fullscreen-modal").append('<a class="close-full-screen-modal animated fadeIn" style="animation-delay:0.5s;" onclick="$(\'#lightbox-modal\').modal(\'hide\');"><div class="close-icon"></div></a>'), $("#blocs-lightbox-close-btn").remove()), ".mp4" == e.substring(e.length - 4) ? ($("#lightbox-image, .lightbox-caption").hide(), $("#lightbox-video-container").show()) : ($("#lightbox-image,.lightbox-caption").show(), $("#lightbox-video-container").hide()), $("#lightbox-modal").modal("show"), "no-gallery-set" == o ? (0 == $("a[data-lightbox]").index(targetLightbox) && $(".prev-lightbox").hide(), $("a[data-lightbox]").index(targetLightbox) == $("a[data-lightbox]").length - 1 && $(".next-lightbox").hide()) : (0 == $('a[data-gallery-id="' + o + '"]').index(targetLightbox) && $(".prev-lightbox").hide(), $('a[data-gallery-id="' + o + '"]').index(targetLightbox) == $('a[data-gallery-id="' + o + '"]').length - 1 && $(".next-lightbox").hide()), addLightBoxSwipeSupport()
    }).on("hidden.bs.modal", "#lightbox-modal", function() {
        $("#lightbox-modal").remove()
    }), $(document).on("click", ".next-lightbox, .prev-lightbox", function(t) {
        t.preventDefault();
        var e = "no-gallery-set",
            i = $("a[data-lightbox]").index(targetLightbox),
            a = $("a[data-lightbox]").eq(i + 1);
        targetLightbox.attr("data-gallery-id") && (e = targetLightbox.attr("data-gallery-id"), i = $('a[data-gallery-id="' + e + '"]').index(targetLightbox), a = $('a[data-gallery-id="' + e + '"]').eq(i + 1)), $(this).hasClass("prev-lightbox") && (a = $('a[data-gallery-id="' + e + '"]').eq(i - 1), "no-gallery-set" == e && (a = $("a[data-lightbox]").eq(i - 1)));
        var o = a.attr("data-lightbox");
        if (".mp4" == o.substring(o.length - 4)) {
            var l = "";
            1 == a.attr("data-autoplay") && (l = "autoplay"), $("#lightbox-image, .lightbox-caption").hide(), $("#lightbox-video-container").show().html("<video controls " + l + ' class="embed-responsive-item"><source id="lightbox-video" src="' + o + '" type="video/mp4"></video>')
        } else $("#lightbox-image").attr("src", o).show(), $(".lightbox-caption").html(a.attr("data-caption")).show(), $("#lightbox-video-container").hide();
        targetLightbox = a, $(".next-lightbox, .prev-lightbox").hide(), "no-gallery-set" == e ? ($("a[data-lightbox]").index(a) != $("a[data-lightbox]").length - 1 && $(".next-lightbox").show(), $("a[data-lightbox]").index(a) > 0 && $(".prev-lightbox").show()) : ($('a[data-gallery-id="' + e + '"]').index(a) != $('a[data-gallery-id="' + e + '"]').length - 1 && $(".next-lightbox").show(), $('a[data-gallery-id="' + e + '"]').index(a) > 0 && $(".prev-lightbox").show())
    })
}

function addSwipeSupport() {
    $(".carousel-inner").length && $(".carousel-inner").swipe({
        swipeLeft: function(t, e, i, a, o) {
            $(this).parent().carousel("next")
        },
        swipeRight: function() {
            $(this).parent().carousel("prev")
        },
        threshold: 0
    })
}

function addKeyBoardSupport() {
    $(window).keydown(function(t) {
        37 == t.which ? $(".prev-lightbox").is(":visible") && $(".prev-lightbox").click() : 39 == t.which && $(".next-lightbox").is(":visible") && $(".next-lightbox").click()
    })
}

function addLightBoxSwipeSupport() {
    $("#lightbox-image").length && $("#lightbox-image").swipe({
        swipeLeft: function(t, e, i, a, o) {
            $(".next-lightbox").is(":visible") && $(".next-lightbox").click()
        },
        swipeRight: function() {
            $(".prev-lightbox").is(":visible") && $(".prev-lightbox").click()
        },
        threshold: 0
    })
}
$(document).ready(function() {
    $("#scroll-hero").click(function(t) {
        t.preventDefault(), $("html,body").animate({
            scrollTop: $("#scroll-hero").closest(".bloc").height()
        }, "slow")
    }), extraNavFuncs(), setUpSpecialNavs(), setUpDropdownSubs(), setUpLightBox(), setUpVisibilityToggle(), addSwipeSupport(), addKeyBoardSupport(), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && $("#page-loading-blocs-notifaction").remove()
}), $(window).load(function() {
    setFillScreenBlocHeight(), animateWhenVisible(), $("#page-loading-blocs-notifaction").remove()
}).resize(function() {
    setFillScreenBlocHeight()
}), $(function() {
    $('[data-toggle="tooltip"]').tooltip()
});
>>>>>>> a4655f5 (first commit)
