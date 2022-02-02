window.onload = function() {

   const slideInTop = (elem, delay, duration)=>{
       let tween = gsap.fromTo (
           elem,
           {
               opacity:0,
               y:-200,
               delay: delay||1,
               duration: duration||2,
           },
           {
              opacity:1,
              y:0,
              delay: delay||1,
              duration: duration||2,
           }
       )
       ScrollTrigger.create({
        trigger: elem,
        start:"top center",
        end:"bottom center",
        animation:tween
    })
   };

   const slideFromLeft = (elem, delay, duration)=>{
    let tween = gsap.fromTo (
        elem,
        {
            opacity:0,
            x:-200,
            duration:1
        },
        {
           opacity:1,
           x:0,
           delay: delay || 1.5,
           duration: duration || 3,
        }
    )
    ScrollTrigger.create({
        trigger: elem,
        start:"top center",
        end:"bottom center",
        animation:tween
    })
};

const slideFromRigth = (elem, delay, duration)=>{
    let tween = gsap.fromTo (
        elem,
        {
            opacity:0,
            x:200,
            duration:0.4
        },
        {
           opacity:1,
           x:0,
           delay: delay || 0.7,
           duration: duration || 1.5,
        }
    )
    ScrollTrigger.create({
        trigger: elem,
        start:"top center",
        end:"bottom center",
        animation:tween
    })
};
const slideFromBottom = (elem, delay, duration)=>{
    let tween = gsap.fromTo (
        elem,
        {
            opacity:0,
            x:80,
            duration:1
        },
        {
           opacity:1,
           x:0,
           delay: delay || 1,
           duration: duration || 1.5,
        }
    )
    ScrollTrigger.create({
        trigger: elem,
        start:"top center",
        end:"bottom center",
        animation:tween
    })
};

   slideFromLeft("#card");
   slideInTop(".bloc");
   slideInTop("#titre");
   slideFromRigth(".other");
   slideFromBottom(".marg")

}