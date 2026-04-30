let n = 5;
if (n > 0) {
  console.log("Possitive Integer");
} else {
  console.log("negative Integer");
}

let m = 10;
if (m % 2 == 0) {
  console.log("Even");
} else {
  console.log("odd");
}

let marks = 90;
 if(marks >= 90)
 {
    console.log("A");
 }
 else if(marks >=75 && marks <90){
     console.log("B");
 }
 else if(marks >=50 && marks <75){
     console.log("c");
 }
 else{
    console.log("fail");
 }

 let usr = "abcd";
 let pass = "1234";
//  if(usr === "abcd" && pass === "1234"){
//      console.log("login success");
//  }
//  else{
//      console.log("login failed");
//  }

 usr === "abcd" && pass === "1234"
    ? console.log("login success")
    :  console.log("login failed");

 let a = 5;
 let b = 6;
 console.log(a>2 || b<3);
 
 let data;
 let name = "Payal";

 data = name || "N/A"

//  if(name)
//     {
// data = name;
//  } 
//  else{
//     data = "N/A";
//  }
 console.log(data);

//  let x = 10;
 let x = 1;
 console.log(x>2 && y<5);

 for(let i = 0; i< 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
 }

 for(let i = 0; i< 5; i++){
    if(i === 3){
        break;
    }
    console.log(i);
 }

 let choise = 1;
 switch(choise){
    case 1: {
        console.log("Tea");
        break;
    }
     case 2: {
        console.log("Coffee");
        
    }
     case 3: {
        console.log("Lassi");
        break;
    }
    default: {
        console.log("Water"); 
    }
 }