/* ======================================
   NOIR CAFE
   gsap.js
====================================== */

gsap.registerPlugin(ScrollTrigger);

/* ---------- Hero ---------- */

gsap.to(".hero img", {

    scale:1.15,

    scrollTrigger:{
        trigger:".hero",
        scrub:true
    }

});

/* ---------- Fade Animation ---------- */

gsap.utils.toArray(".fade-section")
.forEach((section) => {

    gsap.to(section, {

        opacity:1,
        y:0,

        duration:1.2,

        ease:"power3.out",

        scrollTrigger:{
            trigger:section,
            start:"top 80%"
        }

    });

});
