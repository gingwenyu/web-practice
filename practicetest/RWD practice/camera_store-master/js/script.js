jQuery(document).ready(function($) {
    // Banner Slider
    var jssor_1_options = {
        $FillMode: 2,
        $AutoPlay: true,
        $SlideWidth: 1180,
        $Cols: 2,
        $Align: 100,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1480);
            jssor_1_slider.$ScaleWidth(refSize);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/

    // Scroll to Top
    var $scrollTop = $('.scrollToTop');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            $scrollTop.fadeIn();
        } else {
            $scrollTop.fadeOut();
        }
    });

    $scrollTop.hide().click(function() {
        $("html, body").animate({ scrollTop: 0 });
    });
});
