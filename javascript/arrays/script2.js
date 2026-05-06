// let fd = [
//   ["rajVardhan", "18-11-1997", 8878893068, "Bhopal", "Teacher"],
//   ["PranayDas", "18-11-1996", 8878893069, "Bhopal", "Teacher"],
//   ["Prasoon", "18-11-1999", 8878893068, "Bhopal", "Teacher"],
//   ["Anit", "18-11-1998", 8878893068, "Bhopal", "Teacher"],
//   ["Ashish", "18-11-1999", 8878893068, "Bhopal", "Teacher"],
// ];
// fd.forEach((Element) => {
//   console.log(Element[0]);
// });

// let fd = [
//   ["Aniket", "01-01-2026", 8989791426, "Satna", "Student"],
//   ["Suraj", "01-01-2026", 8989791426, "Satna", "Student"],
//   ["Ashish", "01-01-2026", 8989791426, "Satna", "Student"],
//   ["Prasoon", "01-01-2026", 8989791426, "Satna", "Student"],
// ];

// fd.forEach((Element) => {
//   console.log(Element[0]);
// });

// -------------------------------------------------------------------//

let fData = [                                //forEach
  {
    id: 1,
    name: "Aniket Sharma",
    age: 21,
    course: "Computer Science",
    city: "Bhopal",
    skills: ["React", "JavaScript", "Tailwind"],
    isActive: true,
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 22,
    course: "Information Technology",
    city: "Indore",
    skills: ["Python", "Django", "SQL"],
    isActive: false,
  },
  {
    id: 3,
    name: "Rahul Singh",
    age: 20,
    course: "Electronics",
    city: "Delhi",
    skills: ["C++", "Arduino", "Embedded C"],
    isActive: true,
  },
  {
    id: 4,
    name: "Sneha Patel",
    age: 23,
    course: "Mechanical",
    city: "Pune",
    skills: ["AutoCAD", "SolidWorks"],
    isActive: true,
  },
  {
    id: 5,
    name: "Aman Khan",
    age: 24,
    course: "Computer Science",
    city: "Mumbai",
    skills: ["Node.js", "MongoDB", "Express"],
    isActive: false,
  },
];

fData.forEach((item) => {                   //forEach
  console.log(item["age"]);
});

// console.log(fData);

console.log(fData[1]["name"]);          //backet notation
console.log(fData[2]["age"]);
console.log(fData[4]["city"]);

console.log(fData[2].name);            //dot notation

fData.map((Element, idx) => {               //map
    console.log(Element, idx);
    
})
let Payal = {
  id: 1,
  name: "Payal Sanodiya",
  age: 24,
  city: "Bhopal"
};

console.log(Object.keys(Payal));
console.log(Object.values(Payal));
console.log(Object.entries(Payal));

let ar = [22, 45, 65, 35, 19, 78, 89, 19, 12];  
ar.sort((a, b) => a-b);                     //sorting
console.log(ar);

console.log(ar.find((val) => val > 20));
console.log(ar.find((val) => val === 12));
console.log(ar.findIndex((val) => val === 22));
console.log(ar.findLastIndex((val) => val === 22));

ar.sort((a, b) => b - a);                     //sorting
console.log(ar);

console.log(ar.find((val) => val > 20));
console.log(ar.find((val) => val === 12));
console.log(ar.findIndex((val) => val === 22));
console.log(ar.findLastIndex((val) => val === 22));

let arr = [22, 45, 65, 35, 19, 78, 89, 19, 12];  
console.log(arr.filter((val) => val > 20));       //filter

console.log(arr.find((val) => val > 20));         //find

console.log(arr.slice(0, 3));                     //slice

let ab = "this is web-development"                //split
console.log(ab);

console.log(ab.split(" "));
console.log(ab.split("-"));


