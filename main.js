let bookCloseNav = document.querySelector(".book-close-btn");
let bookOpenNav = document.querySelector(".book-open-btn");
let menuBar = document.querySelector(".menu-bar");

// close event
bookCloseNav.onclick = () => {
  menuBar.classList.toggle("active");
  bookCloseNav.classList.toggle("active");
  bookOpenNav.classList.toggle("active");
};

// open event
bookOpenNav.onclick = () => {
  menuBar.classList.toggle("active");
  bookCloseNav.classList.toggle("active");
  bookOpenNav.classList.toggle("active");
};
