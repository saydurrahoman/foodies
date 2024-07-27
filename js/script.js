// scroll button
let toTop=document.querySelector(".totop");
window.addEventListener("scroll",function(){
    if(window.pageYOffset>100){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})
// active header
let nav = document.querySelector(".navigation_wram");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
// off navber start
let navBer = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBer.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
})
// counter start
$('#counter-block').ready(function(){
    $('.coun1').animationCounter({
      start: 0,
      end: 500,
      step: 10,
      delay:200
    });
    $('.coun2').animationCounter({
      start: 1,
      end: 1300,
      step: 10,
      delay:200
    });
    $('.coun3').animationCounter({
      start: 0,
      end: 570,
      step: 4,
      delay: 200
    });
    $('.coun4').animationCounter({
      start: 0,
      end: 2000,
      step: 20,
      delay: 200
    });
});