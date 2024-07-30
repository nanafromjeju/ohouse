const numbers = [1, 2, 3, 4];

// 배열 구조 분해 할당
//    [1, 2, 3, 4]
const [b, c, d] = numbers;

console.log(b); // 1
console.log(c); // 2
console.log(d); // 3

const users = {
  name: "Mike",
  age: 85,
};

// 객체 구조 분해 할당
const { email = "thesecon@gmail.com" };
const { age: userAge } = users;
const age = 999;
console.log(email);

// 특히 어마어마하게 쓰인다! 공부하세용
