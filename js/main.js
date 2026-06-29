const layers =
    document.querySelectorAll(".layer");

const message =
    document.getElementById("message");

const spellArea =
    document.getElementById("spellArea");

const spellBtn =
    document.getElementById("spellBtn");

const inkTransition =
    document.getElementById("inkTransition");

const fog =
    document.querySelector(".fog");

/* =====================
   Camera
===================== */

let cameraY = 0;

let speed = 12;

const stopAt = 1800;

let finished = false;

/* =====================
   Cinematic Camera
===================== */

function animateScene() {

    if (finished) return;

    cameraY += speed;

    const remain =
        stopAt - cameraY;

    if (remain < 600) {

        speed *= 0.988;

        if (speed < 0.4) {

            speed = 0.4;
        }
    }

    layers.forEach(layer => {

        const layerSpeed =
            parseFloat(
                layer.dataset.speed
            );

        layer.style.transform =

            `translateY(${-(cameraY * layerSpeed)
            }px)`;

    });

    if (cameraY < stopAt) {

        requestAnimationFrame(
            animateScene
        );

    } else {

        finished = true;

        showMessage();

    }

}

/* =====================
   Message
===================== */

function showMessage() {

    message.classList.add(
        "show"
    );

    setTimeout(() => {

        spellArea.classList.add(
            "show"
        );

    }, 1500);

}

/* =====================
   Start
===================== */

window.addEventListener(

    "load",

    () => {

        animateScene();

    }

);

/* =====================
   Fog Floating
===================== */

let fogOffset = 0;

function animateFog() {

    fogOffset += 0.01;

    const move =

        Math.sin(
            fogOffset
        ) * 30;

    fog.style.marginLeft =
        move + "px";

    requestAnimationFrame(
        animateFog
    );

}

animateFog();

/* =====================
   404 Glow
===================== */

let breathe = 0;

function messageGlow() {

    breathe += 0.02;

    const glow =

        20 +
        Math.sin(breathe) * 10;

    message.style.filter =

        `drop-shadow(
        0 0 ${glow}px rgba(255,255,255,.5)
    )`;

    requestAnimationFrame(
        messageGlow
    );

}

messageGlow();

/* =====================
   Spell Glow
===================== */

let spellGlowValue = 0;

function spellGlow() {

    spellGlowValue += 0.05;

    const power =

        12 +
        Math.sin(
            spellGlowValue
        ) * 6;

    spellBtn.style.textShadow =

        `
    0 0 ${power}px #ffd700,
    0 0 ${power * 2}px #ffd700,
    0 0 ${power * 3}px #fff0a0
    `;

    requestAnimationFrame(
        spellGlow
    );

}

spellGlow();

/* =====================
   Click
===================== */

spellBtn.addEventListener(

    "click",

    () => {

        inkTransition.classList.add(
            "active"
        );

        setTimeout(() => {

            location.href =
                "room404.html";

        }, 2500);

    }

);