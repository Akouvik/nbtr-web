window.onscroll = function() {myFunction()};

const navbarContainer = document.getElementById("navbarContainer");
const sticky = navbarContainer.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
      alert("hey")
    navbarContainer.classList.add("sticky");
  } else {
    navbarContainer.classList.remove("sticky");
  }
}