//  let arr = [10, 42, 24, 56, 55];
//  for (var i = 0; i< 5; i++){
//     console.log(arr[i]);

//  }
//  console.log(arr);

//  arr[2] = arr[2] + 10;

//  console.log(arr);

//  arr = [];
//  console.log(arr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);

arr.push(5);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(3);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.at(5));

console.log(arr.indexOf(2));

console.log(arr.includes(3));

console.log(arr.indexOf(4));

let unar = [93, 34, 35, 45, 65, 2, 3, 80];
console.log(unar);

unar.sort();
console.log(unar);

unar.reverse();
console.log(unar);

let ar = [93, 34, 35, 45, 65, 2, 3];
for (var i = 0; i < 7; i++) {
  console.log(ar[i]);
}

console.log("for each loop");

ar.forEach((Element) => {
  console.log(Element);
});


