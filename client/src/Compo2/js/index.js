// // Nav
// const nav = document.querySelector(".nav-menu");
// const navigation = document.querySelector(".navigation");
// const openBtn = document.querySelector(".hamburger");
// const closeBtn = document.querySelector(".close");

// const navLeft = nav.getBoundingClientRect().left;
// openBtn.addEventListener("click", () => {
//   if (navLeft < 0) {
//     navigation.classList.add("show");
//     nav.classList.add("show");
//     document.body.classList.add("show");
//   }
// });

// closeBtn.addEventListener("click", () => {
//   if (navLeft < 0) {
//     navigation.classList.remove("show");
//     nav.classList.remove("show");
//     document.body.classList.remove("show");
//   }
// });

// // Fixed Nav
// const navBar = document.querySelector(".navigation");
// const navHeight = navBar.getBoundingClientRect().height;
// window.addEventListener("scroll", () => {
//   const scrollHeight = window.pageYOffset;
//   if (scrollHeight > navHeight) {
//     navBar.classList.add("fix-nav");
//   } else {
//     navBar.classList.remove("fix-nav");
//   }
// });

// // Scroll To
// const links = [...document.querySelectorAll(".scroll-link")];
// links.map(link => {
//   link.addEventListener("click", e => {
//     e.preventDefault();

//     const id = e.target.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     const fixNav = navBar.classList.contains("fix-nav");
//     let position = element.offsetTop - navHeight;

//     if (!fixNav) {
//       position = position - navHeight;
//     }

//     window.scrollTo({
//       top: position,
//       left: 0,
//     });

//     navigation.classList.remove("show");
//     nav.classList.remove("show");
//     document.body.classList.remove("show");
//   });
// });

// // preloader
// window.addEventListener("load", () => {
//   const loader = document.getElementById("pre-loader");
//   setTimeout(() => {
//     loader.classList.add("hide");
//   }, 2000);
// });

// // PopUp
// const popup = document.querySelector(".popup");
// const closePopup = document.querySelector(".popup-close");

// closePopup.addEventListener("click", () => {
//   popup.classList.remove("show");
// });

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     popup.classList.add("show");
//   }, 5000);
// });
var container = document.querySelector('.container');
var beerStream = document.querySelector('.beerStream');
var handle = document.querySelector('.handle');
var beerLiquid = document.querySelector('.beerLiquid');
var fullGlass = document.querySelector('.fullGlass');

TweenMax.set(container, {
  position:'absolute',
  top:'50%',
  left:'50%',
  xPercent:-50,
  yPercent:-50
})

var tl = new TimelineMax({delay:1, repeat:-1});
tl.timeScale(2.6)
tl.to(handle, 0.3, {
  rotation:30,
  transformOrigin:'50% 90%',
  ease:Back.easeIn
})
.fromTo(beerStream, 4,{
  y:-450
},{
  y:250,
  ease:Linear.easeNone
})
  .to(handle, 0.3, {
  rotation:0,
  ease:Back.easeOut
}, '-=2')

.fromTo(beerLiquid, 4, {
  y:200,
  x:80
},{
  y:-15,
  x:0
},'-=3.8')

.staggerTo('.froth circle', 1.6, {
  attr:{
    r:'+=15',
    cy:'-=10'
  },
  alpha:1,
  ease:Elastic.easeOut.config(1, 0.61)
}, 0.1, '-=0.6')

.staggerTo('.beerBubbles circle', 3, {
  attr:{
    cy:'-=100'
  },
  ease:Power1.easeIn,
  alpha:1
}, 0.1, '-=3')

.to(fullGlass, 2, {
  attr:{ 
  	x:-400
  },
  ease:Back.easeIn.config(0.5)
})
.staggerTo('.beerBubbles circle',0.1, {
  attr:{
    cy:'+=100'
  }, 
 
  alpha:0
},0)
.staggerTo('.froth circle',0.1, {
  attr:{
    r:'-=15',
    cy:'+=10'
  },
  alpha:0
},0)
.to(fullGlass,0, {
  attr:{
    x:600
  }
})

.set(beerLiquid,{
  x:0,
  y:200
})

.to(fullGlass,2, {
  attr:{
    x:0
  },
  ease:Back.easeOut.config(0.5)
})

.to(fullGlass, 0.3, {
  rotation:16
})
