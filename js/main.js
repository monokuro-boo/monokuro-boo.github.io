/* ======================================
   NOIR CAFE
   main.js
====================================== */

/* ---------- ローダー ---------- */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loaded");

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1500);

});

/* ---------- ヘッダー縮小 ---------- */

const header =
document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ---------- ハンバーガー ---------- */

const hamburger =
document.querySelector(".hamburger");

const mobileMenu =
document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    mobileMenu.classList.toggle("active");

});

/* ---------- TOPへ戻る ---------- */

const pageTop =
document.getElementById("page-top");

pageTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
