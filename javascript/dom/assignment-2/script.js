
// 1.Create a form with:
// • Name
// • City
// • Submit Button
// 2.Condition:
// • Result should be hidden initially
// • On clicking Submit → display Name and City
// 3. Styling:
// • Add border and shadow to form
// • Change text color of result
 function showData() {
        const name = document.getElementById("name").value;
        const city = document.getElementById("city").value;

        const result = document.getElementById("result1");
        result.innerText = `Name: ${name}, City: ${city}`;
        result.style.display = "block";
      }



// Assignment 2
// 1. Create a form with:
// • Email
// • Password
// • Submit Button
// 2. Condition:
// • Do not show result while typing
// • On Submit → display Email and Password
// 3. Styling:
// • Change background color after clicking
// button
// • Add border to result box
function submitForm() {
      const email = document.getElementById("email").value;
      const pass = document.getElementById("password").value;

      const result = document.getElementById("result2");
      result.innerText = `Email: ${email}, Password: ${pass}`;
      result.style.display = "block";

      // background change
      document.body.style.backgroundColor = "#d1f7c4";
    }

// Assignment 3
// 1. Create a form with:
// • First Name
// • Last Name
// • Submit Button
// 2. Condition:
// • On Submit → display full name (First + Last)
// 3. Styling:
// • Change text color
// • Add shadow to result section
function showFullName() {
      const f = document.getElementById("fname").value;
      const l = document.getElementById("lname").value;

      const result = document.getElementById("result3");
      result.innerText = `Full Name: ${f} ${l}`;
      result.style.display = "block";
    }