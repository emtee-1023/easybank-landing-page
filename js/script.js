function openMenu() {
    const mobileNav = document.querySelector(".popup");
    mobileNav.classList.add("active");

    const openBtn = document.querySelector(".open-menu");
    openBtn.classList.add("active")

    const closeBtn = document.querySelector(".close-menu");
    closeBtn.classList.add("active");

}

function closeMenu() {
    const mobileNav = document.querySelector(".popup");
    mobileNav.classList.remove("active");

    const openBtn = document.querySelector(".open-menu");
    openBtn.classList.remove("active")

    const closeBtn = document.querySelector(".close-menu");
    closeBtn.classList.remove("active");

}
