// ここにコードを書きながら確認しましょう！
const array2 = [1, 2, 3, 4, 5];
array2.forEach((val) => console.log(val));

array2.forEach((val, index, array) => console.log(val, index, array));

const array3 = [2, 4, 6, 8, 10];
const newArray = array3.map((val) => val * 2);
console.log(newArray);

// 練習問題
// 問題 1
const array = [
  {
    tag: "p",
    className: "hoge",
  },
  {
    tag: "div",
    className: "fuga",
  },
  {
    tag: "h1",
    className: "piyo",
  },
];

const newArray2 = array.map((val) => {
  return {
    tag: val.tag,
    className: "c-" + val.className,
  };
});
console.log(newArray2);
