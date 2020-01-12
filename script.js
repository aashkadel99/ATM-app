var sidebarOpened = false;

function toggleSidebar() {
  document.getElementsByClassName("sidebar")[0].classList.toggle("active");
  sidebarOpened = true;
}

document.addEventListener("click", function(event) {
  var x = event.clientX;
  if (x > 295 && sidebarOpened === true) {
    document.getElementsByClassName("sidebar")[0].classList.toggle("active");
    sidebarOpened = false;
  }
});