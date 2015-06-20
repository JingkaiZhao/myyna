var mockCategory = {
    carouselImgSrc: '../images/small/pin-381.png',
    carouselNavUrl: '../pin/557460a5fce885ab59fe0d7b.html',
    pinDescription: 'pin description 381',
    createDate: '1 week ago',
    pinnedBy: {
        avatar: '../user_images/thumb/blackbutterfly700.jpg',
        name: 'antonio alonso'
    },
    pinnedOnto: {
        avatar: '../boards/thumb/board-106.png',
        name: 'Board 106'
    }
};
var mockMenuItem = {
    name: "Category-",
    url: "temp"
};
var mockCategories = [];
var mockMenuItems = [];
for (var i = 0; i < 15; ++i) {
    mockCategories.push(mockCategory);
    mockMenuItem.name = "Category-" + i;
    mockMenuItems.push(mockMenuItem);
}
React.render(
    React.createElement("div", {className: "component-container"}, 
        React.createElement(GlobalHeader, {menuItems: mockMenuItems}), 
        React.createElement(CategoriesCollection, {categoriesData: mockCategories})
    ),
    document.getElementById("categories-container")
);
$(document).ready(function() {
    //          if($.browser.mozilla){
    //           $("#chrome_extention").attr("href", "javascript:;");   
    //          }
    //          
    //           if($.browser.chrome){             
    //               if (chrome.app.isInstalled) {
    //  document.getElementById('chrome_extention').style.display = 'none';
    //}
    //             $("a#firefox_extention").attr("href", "javascript:;");    
    //          }
    modalInit();

    $('audio').mediaelementplayer();

    var mOpts = {
        itemSelector: '.element',
        isFitWidth: true,
        isResizable: true,
        gutterWidth: 15,
        isAnimated: false,
        animationOptions: {
            duration: 300,
            easing: 'linear',
            queue: false
        }
    }


    mOpts['columnWidth'] = 300;


    $('#container').masonry(mOpts);

    if ($("#container").length !== 0) {
        imagesLoaded(document.querySelector('#container'), function(instance) {
            $('#container').masonry('reload');
        });
    }
    if ($("#pop_up_container").length !== 0) {
        popup_functions();
    }
    var tempScrollTop;

    $('#myModal').on('show.bs.modal', function(e) {
        if (!$('html').hasClass('modal-open')) {
            tempScrollTop = $(window).scrollTop();
        }
        $('html').addClass('modal-open');
        var url = window.localStorage.getItem('cbt_parenturl');
        if (typeof(url) == 'undefined' || url == null) {
            url = document.URL;
        }
        expression = /.*\/(?!$)/;
        var str = expression.exec($(e.relatedTarget).attr('href'));
        window.localStorage.setItem('cbt_parenturl', url);
        window.history.pushState({}, "", str);
        popup_functions();
    });

    $('#myModal').on('hide.bs.modal', function() {
        $('html').removeClass('modal-open');
        $(window).scrollTop(tempScrollTop);
        url = window.localStorage.getItem('cbt_parenturl');
        window.history.pushState({}, "", url);
        window.localStorage.removeItem('cbt_parenturl');
    });

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('body').niceScroll({
            zindex: 1030,
            horizrailenabled: false
        });
        $('.nav_scoll').niceScroll();
        $('.dropdown-menu.cubet_comment_sub').niceScroll();
    }

    if ($("#board_container").length !== 0) {
        $('#board_container .row:first').hide().css('visibility', 'visible');

        $(window).scroll(function() {
            var top = 280;

            if ($(window).width() < 480) {
                top = 600;
            }

            var mtop = '480px';
            if ($(this).scrollTop() > top) {
                $('#board_container .row:last').css('visibility', 'hidden');
                $('#board_container .row:first').slideDown();

            } else {
                // $('#container').css('margin-top', '0px');
                $('#board_container .row:first').hide();
                $('#board_container .row:last').css('visibility', 'visible');
            }
        });
    }
});



$(window).load(function() {
    $('.dropdown-toggle').dropdown();
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 100,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });

});

function modalInit() {
    $('body').on('click', '*[data-toggle="modal"]', function(e) {
        $('.loader').show();
        e.stopPropagation();
        e.preventDefault();
        var id = $(this).attr('data-target');
        var link = $(this).attr('href');
        //to handle popups
        if ($(this).attr('data-extend')) {
            link += '/' + $(this).attr('data-extend');
        }

        $(id).modal('show').on('hide.bs.modal', function() {
            $(this).html('');
        }).on('shown.bs.modal', function() {
            setTimeout("$('.loader').hide();", 100);
        });

        $(id).load(link);


        if (id == '#myModal') {
            var url = window.localStorage.getItem('cbt_parenturl');
            if (typeof(url) == 'undefined' || url == null) {
                url = document.URL;
            }
            expression = /.*\/(?!$)/;
            var str = expression.exec(link);
            window.localStorage.setItem('cbt_parenturl', url);
            window.history.pushState({}, "", str);
        }
    });
}


function popup_functions() {
    var next_scroll = true
    var scr = $("#myModal");

    if ($("#container").length == 0) {
        var scr = $(document);
    }
    scr.scroll(function() {
        var wintop = scr.scrollTop(),
            docheight = $(document).height(),
            winheight = $('#pop_up_container').height();

        if ((wintop + $(".modal_pou_up .row").height()) + parseInt(1000) > winheight) {

            if (next_scroll) {
                // alert(2);
                next_scroll = false;
                //$('div#loadmoreajaxloader').show();
                var start = $('#endlimit2').val();
                var end = parseInt(start) + parseInt(6);
                $('#endlimit2').val(end);
                //alert($("#cur_pin_id").val());

                $.ajax({
                    url: "/upin_nxtpg",
                    data: {
                        "startlimit": start,
                        "endlimit": "3",
                        //"user_id"   : $("#user_id").val(),
                        "cur_pin_id": $("#cur_pin_id").val(),
                        "popup": $("#popup").val()
                    },
                    type: 'post',
                    success: function(html) {
                        //alert(html);
                        if (html) {
                            var mOptsPop = {
                                itemSelector: '.element',
                                isFitWidth: true,
                                isResizable: true,
                                gutterWidth: 15,
                                isAnimated: false,
                                animationOptions: {
                                    duration: 300,
                                    easing: 'linear',
                                    queue: false
                                }
                            };


                            mOptsPop['columnWidth'] = 300;


                            $("#pop_up_container").masonry(mOptsPop);
                            $("#pop_up_container").append(html);

                            $('audio').mediaelementplayer();
                            $(".youtubeClass").unbind('click').bind('click', function() {
                                //alert(2);
                                var vUrl = $(this).children('img.youtube').attr('data-src');
                                $(this).children('iframe').attr('src', vUrl).show();
                                $(this).children('img').hide();
                            });

                            imagesLoaded(document.querySelector('#pop_up_container'), function(instance) {
                                $('#pop_up_container').masonry('reload');
                                next_scroll = true;
                            });
                            //$('div#loadmoreajaxloader').hide();


                        } else {
                            //$('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
                        }
                    },
                    error: function(jqxhr, status, error) {
                        //                            alert('e' + error);
                        //$('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
                    }
                });
            }
        }
    });

    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
    });
    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });

    $(".youtubeClass").unbind('click').bind('click', function() {
        //alert(2);
        var vUrl = $(this).children('img.youtube').attr('data-src');
        $(this).children('iframe').attr('src', vUrl).show();
        $(this).children('img').hide();
    });

    setTimeout(function() {
        imagesLoaded(document.querySelector('.boardMasonry'), function(instance) {
            $('.boardMasonry').masonry('reload');
        });
        $('#myModal').niceScroll();

        if ($('.boardMasonry').length > 0) {
            imagesLoaded(document.querySelector('.boardMasonry'), function(instance) {
                $('.boardMasonry').masonry('reload');
            });
        }
        if ($('.domainContainer').length > 0) {
            imagesLoaded(document.querySelector('.domainContainer'), function(instance) {
                $('.domainContainer').masonry('reload');
            });
        }

        $('.sharegr').hover(function() {
            $('.share_popup').hide();
            $('.popup_share').show();
        }, function() {
            $('.popup_share').hide();
            $('.share_popup').show();
        });

        $('.overflw_sectn').niceScroll({
            horizrailenabled: false
        });
        $('.loader').hide();
    }, 800);

}