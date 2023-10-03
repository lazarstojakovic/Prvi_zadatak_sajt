/* Za otvaranje muskih, zenskih i decijih satova, JQUERY padajuci meni */
$(document).ready(function(){
    $("#muski").click(function(){
      $("#muski_vrste").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#zenski").click(function(){
      $("#zenski_vrste").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#deciji").click(function(){
      $("#deciji_vrste").slideToggle("slow");
    });
  });

/*slideshow na pocetnoj stranici*/
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("tackica");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Menja sliku svake 2 sekunde
}
showSlides();
