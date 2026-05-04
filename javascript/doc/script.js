 function submit(){
   console.log("submit button Clicked");
    
   const fn = document.getElementById("fullName").value;
   console.log(fn);
   
   document.getElementById("myData").innerText = fn ;
   document.getElementById("fullName").value = "";

   document.getElementById("datacard").classList.add("divShow");
   document.getElementById("datacard").classList.remove("divHide");
 }