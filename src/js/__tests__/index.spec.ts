import { init } from "../app";

describe("app", () => {
  beforeEach(() => {
    document.body.innerHTML = `
  <header class="heading"></header>
  <section class="section-1"></section>
  <script src="./bundle.js"></script>`;
  });
  it("should render without error", () => {
    init([
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
  });
  it("should match snapshot", () => {
    init([
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
    expect(document.body).toMatchSnapshot();
  })
});
