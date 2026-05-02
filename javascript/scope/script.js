//  let a = 5;
//  console.log(a);
//  console.log(b);
//  let b = 7;
//  console.log(b);
//  console.log(a);

let test = "this is global Test variable";
function classA() {
  console.log("classA", test);
}

function classB() {
  let test2 = "this is local variable";
  console.log("classB", test);
  console.log("classB", test2);
}

function classC() {
  {
    let v = 10;              //LOCAL VARIABLE
    console.log(v);         //block variable
  }
  console.log("classC", test);
}

function classD() {
  console.log("classD", test);
}

function classE() {
  console.log("classE", test);
}

function classF() {
  console.log("classF", test);
}

function classG() {
  console.log("classG", test);
}

classA();
classB();
classC();
classD();
classE();
classF();
classG();

