(function(global){
    /* gnb */
    var bars = document.querySelector(".bars");
    var sidebar_contents_wrap = document.querySelector(".sidebar_contents_wrap");
    var sidebar_contents_wrap_bg = document.querySelector(".sidebar_contents_wrap .bg");
    var sidebar_contents_wrap_contents_wrap = document.querySelector(".sidebar_contents_wrap .contents_wrap");
    var btn_close_sidebar = document.querySelector(".btn_close_sidebar");
    var gnb_titles = document.querySelectorAll('.gnb_list a.title_wrap');
    var side_motion = new TimelineMax({paused:true});
    side_motion
    .fromTo(sidebar_contents_wrap, .3, {autoAlpha:0}, {autoAlpha:1})
    .fromTo(sidebar_contents_wrap_bg, .3, {autoAlpha:0.5}, {autoAlpha:1})
    .fromTo(sidebar_contents_wrap_contents_wrap, .3, {autoAlpha:0.8,x:500}, {autoAlpha:1,x:0})
    
    bars.addEventListener("click", openRightMenu);
    btn_close_sidebar.addEventListener("click", closeRightMenu, false);
    sidebar_contents_wrap_bg.addEventListener("click", closeRightMenu, false);
    function openRightMenu() {					
        side_motion.play(0);		
    }			
    function closeRightMenu() {							
        side_motion.reverse();
    }
    function onNavLink(select, e){
        //console.log(select, this);
        side_motion.reverse();
    };
    for(var i=0; i<gnb_titles.length; i++){
        var link = gnb_titles[i];
        link.addEventListener('click', (function(index){        
            return onNavLink.bind(link, index);
        })(i));
    }
})(window);		
;(function(){
    /* fullscreen */
    var btn_screen = document.querySelector(".btn_screen");
    var elem = document.documentElement;	
    
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
        localStorage.fullscreen = true;
    }
       
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        localStorage.fullscreen = false;
    }
   
    btn_screen.addEventListener("click",function(e){
        e.preventDefault();								
        if(btn_screen.classList.contains('expand')){			
            openFullscreen()		
            btn_screen.innerHTML = '<i class="fal fa-compress"></i>';
            btn_screen.classList.remove('expand');
        }else{
            closeFullscreen(); 
            btn_screen.innerHTML = '<i class="fal fa-expand"></i>';						
            btn_screen.classList.add('expand');
        }			
    });
})();

