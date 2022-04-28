let i = 1; 
function showSlides(mySlides,slideIndex) {
  // Loop through mySlides array and set slide at index n to active
  for( let n = 0; n < mySlides.length; n++) {
    if ( n === slideIndex-1) {
      mySlides[n].classList.toggle("show", true)
    } else {
      mySlides[n].classList.toggle("show", false)
    }
  }
  // Reset i if i is greater than myslides array
  if (i > mySlides.length){
    i=1;
  }
}
document.addEventListener("DOMContentLoaded", function() { 
  let mySlides = document.querySelectorAll(".mySlides");
  setInterval(function() {
    showSlides(mySlides, i++);
  }, 2000)
});