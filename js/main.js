const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");
const menuIcon = document.querySelector(".menu-icon");
const cartIcon = document.querySelector(".cart-icon");
const navbar = document.querySelector(".navbar");
const cartItemsContainer = document.querySelector(".cart-items-container");

searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");
})

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");;
})

cartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
})

window.onscroll = () => {
    cartItemsContainer.classList.remove("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
}