window.onscroll = function() { makeSticky() };

var header = document.getElementById("stickyHeader");
var sticky = header.offsetTop;

function makeSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}