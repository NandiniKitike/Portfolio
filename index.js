let tablinks = document.getElementsByClassName("links");
let tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sideme = document.getElementById("sidemenu");

function openmenu() {
  sideme.style.right = "0";
}

function closemenu() {
  sideme.style.right = "-200px";
}
