window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const percent = document.getElementById("loader-percent");
    const bar = document.getElementById("loader-bar");

    if (!loader) return;

    let count = 0;

    const loading = setInterval(() => {

        count++;

        if (percent) {
            percent.textContent = count + "%";
        }

        if (bar) {
            bar.style.width = count + "%";
        }

        if (count >= 100) {

            clearInterval(loading);

            gsap.to(loader, {
                opacity: 0,
                duration: 0.8,
                onComplete: () => {
                    loader.style.display = "none";
                }
            });

        }

    }, 30);

});