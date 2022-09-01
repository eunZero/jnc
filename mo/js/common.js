/* 빠른주문 팝업 */
function PopQuick(el){        
    var el = document.querySelector(el);
    var body = document.querySelector('body');
    var content = el.querySelector('.content');
    el.style.display = 'none'; 

    var btn_closes = el.querySelectorAll('.btn_close');
    var btn_closes_arr = Array.prototype.slice.call(btn_closes, 0);
    btn_closes_arr.forEach(function(btn){
        btn.addEventListener("click",function(e){
            body.classList.remove('overflow-hidden');
            el.style.display = 'none';
            e.preventDefault();
        })
    });
    
    this.show = function(isShow){        
        if(isShow){
            if(!body.classList.contains('overflow-hidden')){
                body.classList.add('overflow-hidden');
                content.classList.add('show');
            }
        }else{
            if(body.classList.contains('overflow-hidden')){
                body.classList.remove('overflow-hidden');
                content.classList.remove('show');
            }
        }
        el.style.display = isShow ? 'block' : 'none';
    }    
}

/* 팝업 세팅 */
var popquick = new PopQuick('.pop_wrap');
var btn_gnb = document.querySelector('.btn_gnb');
btn_gnb.addEventListener("click",function(){
 popquick.show(true); // 닫힐 때는 false    
});  

/* gnb 열고 닫기 */
var quick_gnb_wrap = document.querySelector('.quick_gnb_wrap');
var btn_door = document.querySelector('.btn_door');
    btn_door.addEventListener('click',function(){
    quick_gnb_wrap.classList.toggle('show');
});
    
var menu_active = document.querySelector('.quick_gnb_wrap .content_box_list > .active');
if(menu_active){
    menu_active.scrollIntoView({behavior:'smooth'});
}


