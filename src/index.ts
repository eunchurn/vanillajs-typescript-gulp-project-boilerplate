import { $$ } from "./js/selector";

interface Content {
  className: string;
  title: string;
  content: string;
}
(function init(content: Content[]) {
  // First content
  const [first] = content;
  const headingArr = $$(first.className, document);
  const heading = document.querySelectorAll(first.className);
  console.log("Selector Array:", headingArr, "Selector NodeList", heading);
  // Second content
  const [, second] = content;
  const section1 = document.querySelector(second.className);
  if (heading) {
    heading[0].innerHTML = first.title;
  }
  if (section1) {
    const parag = document.createElement("p");
    parag.innerHTML = second.content;
    section1.appendChild(parag);
  }
  // Canvas
  const [, , third] = content;
  const canvas = (document.createElement("canvas") as HTMLCanvasElement)
  Object.assign(canvas, { width: 640, height: 480 });
  if (section1) {
    section1.appendChild(canvas);
  }
  const img = new Image();
  img.src = third.content;
  const context = canvas.getContext("2d");
  if (context) {
    img.onload = function () {
      context.drawImage(img, 0, 0, 640, 480);
      console.log("drawn");
    };
  }
})([
  { className: ".heading", title: "Heading", content: "Simple VanillaJS Yypescript Gulp Project Boilerplate" },
  {
    className: ".section-1",
    title: "Section",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex alias tempore recusandae maxime, illo eum cumque reprehenderit minima molestias qui sequi iste consectetur dolores ducimus ab neque, provident possimus.",
  },
  {
    className: ".cat-canvas",
    title: "Beckhi",
    content: "./public/images/beckhi.jpg",
  },
]);
