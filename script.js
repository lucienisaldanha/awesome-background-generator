// In this exercise, we want to be able to get the value of the two inputs, color1 and color2,
// changing also the web site background, and print these colors to be used later. h3 tag 
// element will be used for printing the colors.

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// body.style.background = "red"; just double checking

// To check if we are getting the correct elements, we can print in the console:
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

//Extracting function from the event listener

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "+color1.value+", "+color2.value+")";
	
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// These event listener will here the event "input", every time the user open the 
// input color 1 or 2, and select a color, it will for now print in the console.
// color1.addEventListener("input", function(){
// 	// console.log(color1.value);
// 	body.style.background = 
// 	"linear-gradient(to right, "+color1.value+", "+color2.value+")";
// })

// color2.addEventListener("input", function(){
// 	// console.log(color2.value);
// 	body.style.background = 
// 	"linear-gradient(to right, "+color1.value+", "+color2.value+")";
// }) 


