// ここにコードを書きながら確認しましょう！
const numbers = [1, 2, 3];
console.log(numbers);
console.log(...numbers);

const copyNumbers = [...numbers];
console.log(copyNumbers);

const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

const animal = ["cat", "dog"];
const fruit = ["apple", "orange"];
const mergeArray = [...animal, ...fruit];
console.log(mergeArray);

const company = {
  name: "Gizumo",
  place: "Shibuya",
};

const copy = { ...company };
console.log(copy);

const newCompanyInfo = {
  ...company,
  established: "2015年5月15日",
};
console.log(newCompanyInfo);

const updateProperty = {
  name: "Front End",
};

const updatedCompanyInfo = { ...company, ...updateProperty };
console.log(updatedCompanyInfo);

// 練習問題
// 問題 1
const packageManager = ["npm", "yarn", "pnpm"];

function arrayFn(array) {
  const framework = ["Vue", "React", "Svelte"];
  return [...framework, ...array];
}

console.log(arrayFn(packageManager));

// 問題 2
const objectA = {
  language: "JavaScript",
  framework: "Vue",
  version: 2,
};

const objectB = {
  version: 3,
};

const newObject = { ...objectA, ...objectB, routingLibrary: "Vue Router" };
console.log(newObject);
