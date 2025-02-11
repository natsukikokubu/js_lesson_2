// ここにコードを書きながら確認しましょう！
const array = ["one", "two", "three"];
const [hoge, fuga, piyo] = array;

console.log(hoge);
console.log(fuga);
console.log(piyo);

// const hoge = array[0];
// const fuga = array[1];
// const piyo = array[2];

function testFn() {
  return ["Hello", 2022];
}

const [text, year] = testFn();
console.log(text);
console.log(year);

// const gizumo = {
//   name: "Gizumo",
//   established: "2015年5月15日",
//   place: "Shibuya",
// };

// const name = gizumo.name;
// const established = gizumo.established;
// const place = gizumo.place;

// console.log(name);
// console.log(established);
// console.log(place);

const gizumo = {
  name: "Gizumo",
  established: "2015年5月15日",
  place: "Shibuya",
  course: {
    frontend: "Vue",
    backend: "Laravel",
  },
};
const {
  course: { frontend, backend },
} = gizumo;
console.log(frontend);
console.log(backend);
const { name, established, place } = gizumo;

const { name: companyName } = gizumo;
console.log(companyName);

// 練習問題
// 問題 1
function arrayFn(arg) {
  return ["jQuery", "Vue", arg];
}
const [first, second, third] = arrayFn("React");
console.log(third);

// 問題 2
function objectFn(arg) {
  const { name } = arg;
  console.log(name);
}

const argObject = {
  name: "Gizumo",
  place: "Shibuya",
};

objectFn(argObject);
