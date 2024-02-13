// UYGA VAZIFA

// // object1
// const me = {
//   firstName: "Sultonqul",
//   lastName: "Nortoyloqov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// console.log(
//   Object.entries(me)
//     .map(([key, value]) => {
//       if (Array.isArray(value)) {
//         return `${key}: ${value.join(",")}`;
//       }
//       return `${key}: ${value}`;
//     })
//     .join("\n")
// );

// // object2
// let n = +prompt(`n natural sonini kiriting`);
// function getSquare(n) {
//   const result = {};
//   for (let i = 1; i <= n; i++) {
//     result[i] = i * i;
//   }
//   return result;
// }
// const square = getSquare(n);
// console.log(square);

// // object3
// let n = +prompt(`n natural sonini kiriting`);
// function getSquare(n) {
//   const result = {};
//   let summKey = 0;
//   let summValue = 0;
//   for (let i = 1; i <= n; i++) {
//     result[i] = i ** 2;
//     summKey += i;
//     summValue += result[i];
//   }
//   console.log(`key qiymatlarining yigindisi: ${summKey}`);
//   console.log(`value qiymatlarining yigindisi: ${summValue}`);
//   return result;
// }
// const square = getSquare(n);

// // object4
// const stringsArray = ["Sultonqul", "Safarmurod", "O’rol", "Jahongir"];
// function getLength(array) {
//     const result = {};
//     for (let i = 0; i < array.length; i++) {
//       let key = array[i];
//       let value = key.length;
//       result[key] = value;
//     }
//     return result;
//   }
//   const length = getLength(stringsArray);
//   console.log(length);

// // object5
// function getPrice(products) {
//   const prices = Object.values(products);
//   const summ = prices.reduce((acc, current) => acc + current, 0);
//   return summ;
// }
// const products = {
//   Apelsin: 10000,
//   Olma: 12000,
//   Mandarin: 8000,
//   Banan: 20000,
// };
// const summ = getPrice(products);
// console.log(`mevalarning umumiy narxi: ${summ}`);

// // object6
// function defineObject(obj) {
//   const keys = Object.keys(obj);
//   for (const key of keys) {
//     if (typeof obj[key] !== "string") {
//       return false;
//     }
//   }
//   return true;
// }
// const object = {
//   name: "Maqsadjon",
//   age: 18,
//   region: "Namangan",
// };
// const result = defineObject(object);
// console.log(result);

// // object7
// let inputStr = "Men Sultonqul Programmerning guruhlarida o’qiyman.";
// function minMaxWord(input) {
//   const words = input.split(" ");
//   let minWord = words[0];
//   let maxWord = words[0];
//   for (const word of words) {
//     if (word.length < minWord.length) {
//       minWord = word;
//     }
//     if (word.length > maxWord.length) {
//       maxWord = word;
//     }
//   }
//   return { minWord, maxWord };
// }
// const result = minMaxWord(inputStr);
// console.log(result);

// // object8
// let inputObject = { a: false, b: 12, c: true, d: 0 };
// function removeFalsy(obj) {
//   let result = {};
//   let keys = Object.keys(obj);
//   for (const key of keys) {
//     if (obj[key]) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }
// let result = removeFalsy(inputObject);
// console.log(result);

// // object9
// let peopleArr = [
//   { name: "Sultonqul", age: 23 },
//   { name: "Erkin", age: 20 },
//   { name: "Temur", age: 21 },
// ];
// function getNameMaxAge(people) {
//   let maxAge = 0;
//   let maxAgeName = "";
//   for (const person of people) {
//     if (person.age > maxAge) {
//       maxAge = person.age;
//       maxAgeName = person.name;
//     }
//   }
//   return maxAgeName;
// }
// const result = getNameMaxAge(peopleArr);
// console.log(result);

// // object10
// const inputArray = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// function countNumbers(array) {
//   const result = {};
//   for (const number of array) {
//     if (result[number]) {
//       result[number]++;
//     } else {
//       result[number] = 1;
//     }
//   }
//   return result;
// }
// const result = countNumbers(inputArray);
// console.log(result);

// // object11
// let inputNumber = 8945472985629;
// function numberObject(number) {
//   let numberString = number.toString();
//   let length = numberString.length;
//   let result = {};
//   if (length <= 3) {
//     result.birlar = Number(numberString);
//   } else {
//     let trilionlar = Number(numberString.slice(0, length - 12));
//     let milliardlar = Number(numberString.slice(-12, length - 9));
//     let millionlar = Number(numberString.slice(-9, length - 6));
//     let minglar = Number(numberString.slice(-6, length - 3));
//     let birlar = Number(numberString.slice(-3));
//     result.trilionlar = trilionlar;
//     result.millardlar = milliardlar;
//     result.millionlar = millionlar;
//     result.minglar = minglar;
//     result.birlar = birlar;
//   }
//   return result;
// }
// const result = numberObject(inputNumber);
// console.log(result);

// // object12
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];
// books.forEach((book, index) => {
//   if (book.alreadyRead) {
//     console.log(
//       `${index + 1}. ${book.author}ning "${book.title}" kitobi o'qilgan;`
//     );
//   } else {
//     console.log(
//       `${index + 1}. ${book.author}ning "${book.title}" kitobi o'qilmagan;`
//     );
//   }
// });

// // object13
// let inputObject = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
// let result = {};
// for (const key in inputObject) {
//   let value = inputObject[key];
//   if (!result[value]) {
//     result[value] = [Number(key)];
//   } else {
//     result[value].push(Number(key));
//   }
// }
// console.log(result);

// // object14
// const obj1 = { a: 3, b: 10, c: 5, d: 7 };
// const obj2 = { a: 10, d: 4, e: 6, f: 15 };
// const obj = {};
// for (const key in obj1) {
//   if (!obj2.hasOwnProperty(key)) {
//     obj[key] = obj1[key];
//   }
// }
// for (const key in obj2) {
//   if (!obj1.hasOwnProperty(key)) {
//     obj[key] = obj2[key];
//   }
// }
// console.log(obj);

// // object15
// let products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// let summ = 0;
// for (let product of products) {
//   let discountedPrice = product.price * (1 - product.discount / 100);
//   let totalPrice = discountedPrice * product.quantity;
//   summ += totalPrice;
// }
// console.log("Umumiy summa:", summ);

// // object16
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// let maxProduct = null;
// let minProduct = null;
// for (let product of products) {
//   let discountedPrice = product.price * (1 - product.discount / 100);
//   let totalPrice = discountedPrice * product.quantity;
//   if (!maxProduct || totalPrice > maxProduct.totalPrice) {
//     maxProduct = { ...product, totalPrice };
//   }
//   if (!minProduct || totalPrice < minProduct.totalPrice) {
//     minProduct = { ...product, totalPrice };
//   }
// }
// console.log("Eng katta mahsulot: ", maxProduct);
// console.log("Eng kichik mahsulot: ", minProduct);

// // object17
// let obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };
// let resultArray = [];
// for (let key in obj) {
//   resultArray.push(key);
//   resultArray.push(obj[key]);
// }
// console.log(resultArray);

// // object18
// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// function getGPA(grades) {
//   let credits = 0;
//   let summ = 0;
//   for (const subject of grades) {
//     credits += subject.kredit;
//     summ += subject.grade * subject.kredit;
//   }
//   let gpa = summ / credits;
//   return gpa;
// }
// const result = getGPA(grades);
// console.log("GPA: ", result.toFixed(2));

// // object19
// const right_answers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const my_answers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// function checkAnswers(rightAnswers, myAnswers) {
//   let correct = 0;
//   let incorrect = 0;

//   for (const questions in rightAnswers) {
//     if (rightAnswers[questions] === myAnswers[questions]) {
//       correct++;
//     } else {
//       incorrect++;
//     }
//   }
//   return { correct, incorrect };
// }
// let result = checkAnswers(right_answers, my_answers);
// console.log("To'g'ri javoblar:", result.correct);
// console.log("Noto'g'ri javoblar:", result.incorrect);

// object20
function values(obj, n) {
  let result = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key] * n;
    }
  }
  return result;
}
let n = 3;
let obj = { a: 2, b: 3, c: 4, d: 6 };
let res = values(obj, n);
console.log(res);
