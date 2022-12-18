// //Write your pseduo code first!
// const btn = document.querySelector(".btn");
// const reset = document.querySelector(".reset");

// btn.addEventListener("click", convert);
// reset.addEventListener("click", resetConverter);

// function convert() {
//   // first we need to get the value that is provided by the user
//   const degInCelcius = document.querySelector(".temp").value;
//   // then we need to convert it from Celcius to Farhenrit using the mathematical formula
//   const degInFarenheit = (degInCelcius * 9) / 5 + 32;
//   // and finally we need to display the value in the browser
//   document.querySelector(".placeToShow").innerText = degInFarenheit + "F";
// }

// function resetConverter() {
//   document.querySelector(".temp").value = "";
//   document.querySelector(".placeToShow").innerText = "";
// }

// references to the elements
const tempInput = document.querySelector(".temp");
const output = document.querySelector(".placeToShow");
const convert = document.querySelector(".btn");

// do the conversion from celcius to farenheit when the button is clicked
convert.addEventListener("click", () => {
  // take the teperature form the user
  tempInCelcius = tempInput.value;
  const tempInFarenheit = (tempInCelcius * 9) / 5 + 32;
  // show it to the user
  output.innerText = tempInFarenheit;
});
