const bg = document.querySelector("#bg");

// add 10 x 10 divs to the bg

const random_dark_color = () => {
    const r = 240 + Math.floor(Math.random() * 16);
    const g = 200 + Math.floor(Math.random() * 56);
    const b = 220 + Math.floor(Math.random() * 36);
    return `rgb(${r}, ${g}, ${b})`;
};

const divs = [];

let n_x = window.innerWidth / 120;
let n_y = document.scrollingElement.clientHeight / 120;

const add_boxes = () => {
    bg.innerHTML = "";
    for (let i = 0; i < n_x; i++) {
        for (let j = 0; j < n_x; j++) {
            const div = document.createElement("div");
            div.style.position = "absolute";
            div.style.left = `${i * 120}px`;
            div.style.top = `${j * 120}px`;
            div.style.width = "120px";
            div.style.height = "120px";
            div.style.backgroundColor = random_dark_color();
            div.style.transition = "background-color 0.5s";
            bg.appendChild(div);
            divs.push(div);
        }
    }
};

setInterval(() => {
    divs.forEach((div) => {
        div.style.backgroundColor = random_dark_color();
    });
}, 1000);

window.addEventListener("resize", () => {
    n_x = window.innerWidth / 120;
    n_y = window.innerHeight / 120;
    add_boxes();
});

add_boxes();
