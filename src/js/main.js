import Typed from "typed.js";
import confetti from "canvas-confetti";

new Typed("#heading", {
    strings:["Hey There!", "I'm SEO Specialist", "SEO writer", "Web Developer" ],
    typeSpeed: 78,
    backSpeed: 98,
    cursorChar: "_",
    loop: true,
});

const form = document.getElementById("form");

form.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
    const myCanvas = document.createElement("canvas");
    document.body.appendChild(myCanvas);
    confetti.create(myCanvas, {
        resize: true,
        useWorker: true,
      });
    confetti({
        particleCount: 200,
        spread: 160,
      });

      myCanvas.remove();
    }

});