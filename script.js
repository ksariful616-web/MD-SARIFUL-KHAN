// ================================
// PAGE NAVIGATION
// ================================

function goToYesPage() {
    window.location.href = "yes.html";
}

function goToNoPage() {
    window.location.href = "no.html";
}

function goToConfirmPage() {
    window.location.href = "confirm.html";
}


// ================================
// YES PAGE MUSIC
// ================================

const music = document.getElementById("loveMusic");

if (music) {

    music.loop = true;
    music.volume = 1.0;

    // Try automatic playback
    music.play().catch(function () {
        console.log("Browser blocked autoplay. Waiting for user interaction.");
    });

    // Start music on first click/touch/key interaction
    function startMusic() {

        music.play().catch(function (error) {
            console.log("Music playback failed:", error);
        });

        document.removeEventListener("click", startMusic);
        document.removeEventListener("touchstart", startMusic);
        document.removeEventListener("keydown", startMusic);
    }

    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("touchstart", startMusic, { once: true });
    document.addEventListener("keydown", startMusic, { once: true });
}


// ================================
// FIREWORKS
// ================================

function createFireworks() {

    const fireworks =
        document.getElementById("fireworks");

    if (!fireworks) {
        return;
    }

    for (let i = 0; i < 8; i++) {

        const centerX =
            Math.random() * window.innerWidth;

        const centerY =
            Math.random() *
            window.innerHeight * 0.6;

        for (let j = 0; j < 35; j++) {

            const spark =
                document.createElement("div");

            spark.style.position = "fixed";

            spark.style.left =
                centerX + "px";

            spark.style.top =
                centerY + "px";

            spark.style.width = "7px";

            spark.style.height = "7px";

            spark.style.borderRadius = "50%";

            spark.style.background =
                getRandomColor();

            spark.style.boxShadow =
                "0 0 10px white";

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                50 + Math.random() * 160;

            spark.animate(

                [
                    {
                        transform: "translate(0, 0)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(
                                ${Math.cos(angle) * distance}px,
                                ${Math.sin(angle) * distance}px
                            )`,
                        opacity: 0
                    }
                ],

                {
                    duration:
                        1200 + Math.random() * 800,

                    easing: "ease-out"
                }

            );

            fireworks.appendChild(spark);

            setTimeout(function () {
                spark.remove();
            }, 2200);
        }
    }
}


// ================================
// RANDOM FIREWORK COLORS
// ================================

function getRandomColor() {

    const colors = [
        "#ff1744",
        "#ff4081",
        "#ffeb3b",
        "#ffffff",
        "#e040fb",
        "#00e5ff",
        "#76ff03"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];
}


// ================================
// FLOATING HEARTS
// ================================

function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            18 + Math.random() * 25 + "px";

        heart.style.zIndex =
            "1000";

        heart.style.pointerEvents =
            "none";

        const duration =
            4 + Math.random() * 4;

        heart.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(-${window.innerHeight + 100}px)
                         rotate(360deg)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    duration * 1000,

                easing: "linear"

            }

        );

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, duration * 1000);
    }
}


// ================================
// RUN EFFECTS ON YES PAGE
// ================================

if (
    window.location.pathname.endsWith("yes.html")
) {

    createFireworks();
    createHearts();

}