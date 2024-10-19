const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-link-item a");

navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.parentElement.classList.add("active-nav"); // Use link.parentElement instead of this.parentElement
    console.log(link); // To verify the correct link is found
  }
});
