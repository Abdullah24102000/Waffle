
$(document).ready(function(){
$(window).on('scroll',function(){
if($(window).scrollTop()){
    $("header").addClass('bgn');
}else{
    $("header").removeClass('bgn');
}
});
});

let span = document.querySelector(".Up");
window.onscroll = function (){
    if(this.scrollY >= 300){
        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
};
span.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
};