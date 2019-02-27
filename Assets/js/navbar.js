// navbar following
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//name

if (!localStorage.person){

  localStorage.person = prompt("Quel est votre nom ? ", " ");
  if (localStorage.person != null) {
    document.getElementById("name").innerHTML =
    "Hello " + localStorage.person + "!";
  };

} else {
  
  document.getElementById("name").innerHTML =
  "Hello " + localStorage.person + "!";
  
}
