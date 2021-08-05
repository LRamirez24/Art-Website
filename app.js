let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener('mousemove', cursor);

function cursor(e) {
mouseCursor.style.top = e.pageY + "px";
mouseCursor.style.left = e.pageX + "px";

}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    });
})







const tl = gsap.timeline({ defaults: { ease: 'power1.in' } });
gsap.registerPlugin(ScrollTrigger);






tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1.6 });

tl.fromTo('.arrow', { opacity: 0 }, { opacity: 1, stagger: .3, duration: 1.6 }, "-=1.4");
tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1.6 }, "-=1.4");
tl.fromTo('.sub-headline', { opacity: 0 }, { opacity: 1, duration: 1.6 }, "-=1.4");
tl.fromTo('.img', { opacity: 0 }, { opacity: 1, duration: 1.6 }, "-=1.4");

//gsap.from(".boxes", { duration: 5, x: 300, ease: "bounce", opacity: 0, scale: 0.5 });
gsap.from(".logo", { duration: 4, x: 300, opacity: 0, scale: 0.5 });







gsap.from(".transition1", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".transition1",
        start: "top center",
        end: "top 100px",
        toggleActions: "restart none reverse none",
    }
})

gsap.to(".arrow", {
    x: 400,
    rotation: 360,
    scrollTrigger: {
      trigger: ".arrow",
      start: "top center",
      end: "top 100px",
    toggleActions: "restart none reverse none",
    }
  });


gsap.from(".transition2", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -100,
    scrollTrigger: {
        trigger: ".transition2",
        start: "top center",
        end: "top 100px",
    }
})

gsap.from(".transition3", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -100,
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center",
        end: "top 100px",
    }
});

gsap.from(".transition4", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 100,
    scrollTrigger: {
        trigger: ".transition4",
        start: "top center",
        end: "top 100px",
    }
});

gsap.from(".transition5", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 360,
    scrollTrigger: {
        trigger: ".transition5",
        start: "top center",
        end: "top 100px",
    }
});


gsap.from(".transition6", {
  x: 0,
  y: 100,
  opacity: 0,
  stagger: 0.8,
  rotation: 0,
  scrollTrigger: {
      trigger: ".transition6",
      start: "top center",
      end: "top 100px",
  }
});

gsap.from(".transition7", {
  x: 0,
  y: 100,
  opacity: 0,
  stagger: 0.8,
  rotation: 0,
  scrollTrigger: {
      trigger: ".transition7",
      start: "top center",
      end: "top 100px",
  }
});


gsap.from(".transition8", {
  x: 0,
  y: 100,
  opacity: 0,
  stagger: 0.8,
  rotation: 0,
  scrollTrigger: {
      trigger: ".transition8",
      start: "top center",
      end: "top 100px",
  }
});


// const text = document.querySelector(".join-us");

// var boxWidth = text.getBoundingClientRect().width,
//             totalWidth = boxWidth,  //  * n of boxes
//             dirFromRight = "-=" + totalWidth ;


// var mod = gsap.utils.wrap(0, -totalWidth);



// gsap.set(text, {
//   x:function() {
//     return boxWidth;
//   }
// });


// var action = gsap.timeline()
// .to(text,  {
//   x: dirFromRight,
//   modifiers: {
//     x: x => mod(parseFloat(x)) + "px"
//   },
//   duration: 7, 
//   ease:'none',
//   repeat:-1,
// });    


const dur = 50;

document.querySelectorAll('.js-ticker .wrapper').forEach(ticker => {
  // Get the initial size of the ticker
  const totalDistance = $(ticker).width();
  
  // Position the ticker
  gsap.set(ticker, {yPercent: -50});
  
  // Clone the first item and add it to the end
  $(ticker).append($(ticker.querySelector("li")).clone());
  
  // Get all of the items
  const items = ticker.querySelectorAll("li");
  
  const anim = gsap.to(ticker, { 
    duration: dur,
    x: -totalDistance,
    ease: "none",
    repeat: -1
  });

  let startPos;
  const wrap = gsap.utils.wrap(0, 1);
  const draggable = new Draggable(ticker, {
    type: "x",
    trigger: ticker,
    throwProps: true,
    onPressInit: function() {
      anim.pause();
      startPos = this.x;
    },
    onDrag: function() {
      let prog = wrap(-this.x / totalDistance);
      anim.progress(prog);
    },
    onThrowUpdate: function() {
      let prog = wrap(-this.x / totalDistance);
      anim.progress(prog);
    },
    onThrowComplete: function() {
      anim.play();
      gsap.fromTo(anim, {timeScale:0}, {duration: 1, timeScale:1, ease:"none"});
    },

  });
});




Resources

// gsap.to(".headline-2", {
//     scrollTrigger: ".headline-2", 
//     scale: 1.2, 
//     repeat: 10, 
//     yoyo: true, 
//     ease: "power2"
//   });

// gsap.from(".transition5", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".transition5",
//         start: "top center",
//         end: "top 100px",
//     }
// })

// gsap.from(".transition6", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".transition6",
//         start: "top center",
//         end: "top 100px",
//     }
// })

// gsap.from(".my-picture2", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".my-picture2",
//         start: "top center",
//         end: "top 100px",
//     }
// })

// gsap.from(".my-picture3", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".my-picture3",
//         start: "top center",
//         end: "top 100px",
//     }
// })

// gsap.from(".my-picture4", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".my-picture4",
//         start: "top center",
//         end: "top 100px",
//     }
// })

// gsap.from(".my-picture5", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".my-picture5",
//         start: "top center",
//         end: "top 100px",
//     }
// })


//gsap.to(".boxes", 1, {
//  scale: 0.1,
//y: 500,
//yoyo: true,
//repeat: 1,
//ease: "power1.inOut",
//delay: 1,
//stagger: {
//  amount: 0,
//grid: "auto",
//from: "center"
// }
//});