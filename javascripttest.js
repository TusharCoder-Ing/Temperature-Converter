function convertCelcius (){
   var celcius = document.getElementById("input").value;
   var check = isNaN(celcius);
   var converted = (celcius*1.8)+32;
   if (check === true){
      document.getElementById("result").innerHTML="Please enter a numerical value";
   } else {document.getElementById("result").innerHTML=`${celcius} celcius converted into fahrenheit is ${converted}`;         
}
}
function convertFahrenheit (){
   var fahrenheit = document.getElementById("input").value;
   var check = isNaN(fahrenheit);
   var converted = (fahrenheit-32)/1.8;
   if (check === true){
      document.getElementById("result").innerHTML="Please Enter A numerical value"
   } else { 
      document.getElementById("result").innerHTML=`${fahrenheit} fahrenheit converted into celcius is ${converted}`
   }
}
var test = document.querySelector(".query");
test.innerHTML="BOOM";

