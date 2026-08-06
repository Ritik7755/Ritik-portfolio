/*=========================================
LOADER
=========================================*/



/*=========================================
CUSTOM CURSOR
=========================================*/


/*=========================================
LENIS SMOOTH SCROLL
=========================================*/

if (typeof Lenis !== "undefined") {

    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

} else {

    console.warn("Lenis library not loaded.");

}


/*=========================================
HEADER EFFECT
=========================================*/

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.background="rgba(6,7,10,.95)";

        header.style.boxShadow="0 10px 40px rgba(0,0,0,.4)";

    }

    else{

        header.style.background="rgba(6,7,10,.65)";

        header.style.boxShadow="none";

    }

});


/*=========================================
BACK TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*=========================================
GSAP HERO ANIMATION
=========================================*/




/*=========================================
SCROLL REVEAL
=========================================*/

gsap.utils.toArray("section").forEach((section)=>{

    gsap.from(section,{

        scrollTrigger:{

            trigger:section,

            start:"top 80%"

        },

        y:80,

        opacity:0,

        duration:1

    });

});