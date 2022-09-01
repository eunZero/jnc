(function(global){
    var show_motion = new TimelineMax({paused: true});
    var show_loading = new TimelineMax({paused:true});

    document.addEventListener("DOMContentLoaded", function(event) {//DOM이 로드되면, contents 사이즈 재설정
        var contents = document.querySelector(".contents");
        var window_W = window.innerWidth;
        var ratio = 1;
        var originRatio = 1;
        if(window_W < 1400){
            originRatio = 0.8;
            ratio = window_W/contents.offsetWidth*originRatio;
        }else{
            originRatio = 1;
        }
                                                
        show_motion.set(contents, {autoAlpha:1, scale:ratio*1, immediateRender:true});
        show_loading.set('.loading', {autoAlpha:1, immediateRender:true});
        show_loading
        .add('fadeOut')
        .to('.loading',1,{autoAlpha:0, ease:Power2.easeOut}, 'faseOut+=2')
        ;
        show_loading.play();	
    });
})(window);