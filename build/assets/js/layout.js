var pagemoment = {
    toHover: function () {
        $('.sale-sort').find('.goods').hover(function () {
            $(this).addClass('on').find('.cart').removeClass('hide').css('z-index', '1000')
        }, function () {
            $(this).removeClass('on').find('.cart').addClass('hide').css('z-index', '1')
        })
        $('.empty-tips').find('input').hover(function () {
            $(this).addClass('lion-on')
        }, function () {
            $(this).removeClass('lion-on')
        })
        $('.prod-list').find('li').hover(function () {
            $(this).find('.del-prod').show()
        }, function () {
            $(this).find('.del-prod').hide()
        })
    },
    toCover: function () {
        $('.t-spread').on('click', function () {
            $('html').css('overflow', 'hidden')
            $('.cover').show()
            $('#sp-pop').show()
        })
        $('.t-pond').on('click', function () {
            $('html').css('overflow', 'hidden')
            $('.cover').show()
            $('#com-pop').show()
        })
        $('.cover,.to-close,.continue').on('click', function () {
            $('.cover,#sp-pop,#com-pop').hide()
            $('#copy').removeClass('copied').find('em').html('复制链接')
            $('html').css('overflow', 'auto')
        })
    },
    toCopy: function () {
        $('#copy').on('click', function () {
            var that = $(this).parent().parent().find('.m-right')
            var htm = that.text()
            $(this).attr('data-clipboard-text', htm)
        })
        new Clipboard('#copy').on('success', function () {
            $('#copy').addClass('copied').find('em').html('复制成功')
        }).on('error', function () {
            alert('您的浏览器不支持此功能,换个浏览器试试?')
        })
    },
    init: function () {
        pagemoment.toHover()
        pagemoment.toCover()
        pagemoment.toCopy()
    }
};

var layout = layout || {};

//首页滑动效果
layout.slideUp = function () {
    var oMain = $(".o-main"),
        oHead = $(".o-header");
    //鼠标往上滚 覆盖上去
    var scrollFunc = function () {
        //滚动的高度
        var scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            //头部不悬浮
            oHead.removeClass("suspend");
        } else {
            //头部悬浮
            oHead.addClass("suspend");
            oMain.stop().animate({"marginTop": -scrollTop}, 200);
        }


    };
    /*注册事件*/
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }//W3C
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome/Safari
};

//选品池样式
layout.userStyle = function () {
    var delBtn = $(".del-prod"),//删除图标
        delDubble = $(".del-bubble"),
        prodLi = $(".prod-list li");


    prodLi.hover(function () {
        var _this = $(this);
        _this.addClass("prod-hover").siblings().removeClass("prod-hover");
    }, function () {
        var _this = $(this);
        _this.removeClass("prod-hover");
    });

    delBtn.hover(function () {
        var _this = $(this),
            bubbleDel = _this.parent().find(".del-bubble");//弹框

        bubbleDel.addClass("display_bubble");
    }, function () {
        var _this = $(this),
            bubbleDel = _this.parent().find(".del-bubble");//弹框
        bubbleDel.removeClass("display_bubble");
    });
    delDubble.hover(function () {
        var _this = $(this);
        _this.addClass("display_bubble");
    }, function () {
        var _this = $(this);
        _this.removeClass("display_bubble");
    });


};


//页面加载完成调用
$(function () {
    // layout.slideUp();

    //user.html
    layout.userStyle();
});