const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button").forEach((item) => {

        item.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                scale: 2,
                duration: 0.3
            });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3
            });
        });

    });

}