(function() {
    // 预加载图片数组
    var images = [
        'imgs/p1/1-1.png',
        'imgs/p1/1-2.png',
        'imgs/p1/1-3.png',
        'imgs/p1/1-4.png',
        'imgs/p1/1-5.png',
        'imgs/p2/2-1.png',
        'imgs/p2/2-2.png',
        'imgs/p2/2-3.png',
        'imgs/p3/3-1.png',
        'imgs/p3/3-2.png',
        'imgs/p3/3-3.png',
        'imgs/p4/4-1.png',
        'imgs/p4/4-2.png',
        'imgs/p4/4-3.png',
        'imgs/p4/4-4.png',
        'imgs/p5/5-1.png',
        'imgs/p5/5-2.png',
        'imgs/p5/5-3.png',
        'imgs/p6/6-1.png',
        'imgs/p6/6-2.png',
        'imgs/p6/6-3.png',
        'imgs/p6/6-4.png',
        'imgs/p6/6-5.png',
        'imgs/p6/6-6.png',
        'imgs/p6/6-7.png',
        'imgs/p7/7-1.png',
        'imgs/p7/7-2.png',
        'imgs/p7/7-3.png',
        'imgs/p7/7-4.png',
        'imgs/p8/8-1.png',
        'imgs/p8/8-2.png',
        'imgs/p8/8-3.png',
        'imgs/p8/8-4.png',
        'imgs/p9/9-1.png',
        'imgs/p9/9-2.png',
        'imgs/p9/9-3.png',
        'imgs/p9/9-4.png',
        'imgs/p10/10-1.png',
        'imgs/p10/10-2.png',
        'imgs/p10/10-3.png',
        'imgs/p10/10-4.png',
        'imgs/p11/11-1.png',
        'imgs/p11/11-2.png'
    ];
    var len = images.length,
        $load = $('#loading'); //加载进度条

    //预加载插件调用
    $.preload(images, {
        each: function(count) { //每张图片加载完毕后更新加载进度值
            $load.width(Math.round((count + 1) / len * 100) + '%');
        },
        all: function() { //所有图片加载完毕后
            $('.loading-wrapper').remove();
            $('#main').css({ "display": "block" });
        }
    });
})();