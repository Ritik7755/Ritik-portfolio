gsap.registerPlugin(ScrollTrigger);

const counters = document.querySelectorAll(".counter-number");

let animationPlayed = false;

ScrollTrigger.create({
    trigger: "#achievements",
    start: "top 50%",
    once: true,

    onEnter: () => {

        if (animationPlayed) return;

        animationPlayed = true;

        counters.forEach(counter => {

            let target = parseInt(counter.dataset.target);

            let obj = { value: 0 };

            gsap.to(obj, {

                value: target,

                duration: 2.5,

                ease: "power2.out",

                onUpdate: () => {

                    let value = Math.floor(obj.value);

                    if (target === 100) {

                        counter.innerHTML = value + "%";

                    }

                    else if (target === 11 || target === 6 || target === 5) {

                        counter.innerHTML = value + "+";

                    }

                    else {

                        counter.innerHTML = value;

                    }

                }

            });

        });

    }

});