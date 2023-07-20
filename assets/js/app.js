"use strict";
let menu = document.getElementById("menu-icon");
let navlist = document.getElementsByClassName("navlist")[0];
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
