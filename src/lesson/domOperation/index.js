import "animate.css";

// ここにコードを書きながら確認しましょう！
const title = document.getElementById("title");
const button = document.getElementById("button");
const list = document.querySelector(".card-type--mocha");
const eventType = document.querySelector(".card-type--yellow");

button.addEventListener("click", () => {
  title.classList.add("animate__hinge");
  setTimeout(() => {
    list.classList.add("card-animation");
    title.classList.remove("animate__hinge");
    eventType.classList.add("animate__fadeInUp");
    eventType.style.display = "block";
  }, 2000);
});

// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
