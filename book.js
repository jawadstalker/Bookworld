const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus, id dignissimos similique eum explicabo at, nobis exercitationem voluptatem veniam corporis facere sint saepe iusto recusandae aliquid nostrum eius nihil.";
const element = document.getElementById("typewriter");
let index = 0;

function type() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}

window.onload = type;
