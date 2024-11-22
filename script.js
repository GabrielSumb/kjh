// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 4 seconds
}

// Toggle the menu on small screens
function toggleMenu() {
  var nav = document.getElementById("navDemo");
  if (nav.className.indexOf("w3-show") == -1) {
    nav.className += " w3-show";
  } else {
    nav.className = nav.className.replace(" w3-show", "");
  }
}

