const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){
var a = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
a.addEventListener("mouseenter",function(){
fixed.style.display = "block"
}) 
a.addEventListener("mouseleave",function(){
fixed.style.display = "none"
}) 

var elem = document.querySelectorAll(".elem")
elem.forEach(function(a){
    a.addEventListener("mouseenter",function(){
        var image = a.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

page4Animation()
swiperAnimation()

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })


  var looder = document.querySelector("#looder")
  setTimeout(function(){
    looder.style.top = "-100%"
  },4200)

