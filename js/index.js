import allCards from "./goods.js"
import { AuditCardClick } from "./functions.js";

if(!localStorage.currentGoods){
    localStorage.currentGoods = JSON.stringify({});
}
if(!localStorage.basketOfGoods){
    localStorage.basketOfGoods = JSON.stringify([]);
}
if(!localStorage.currentPagePagination){
    localStorage.currentPagePagination = 1;
}

const [...headerListItems] = document.querySelectorAll(".header-list__item>a[data-headerType]");

headerListItems.forEach((el)=>{
    el.addEventListener("click", (el)=>{
        localStorage.setItem('currentPage',el.target.dataset.headertype);
        localStorage.setItem('currentPagePagination', 1);
        el.target.href = "./catalog/index.html"
    })
})
document.getElementById("section1-btn").addEventListener("click",(el)=>{
    localStorage.setItem('currentPage',el.target.dataset.headertype);
    localStorage.setItem('currentPagePagination', 1);
    el.target.href = "./catalog/index.html"
})
document.getElementById("section3-btn").addEventListener("click",(el)=>{
    localStorage.setItem('currentPage',el.target.dataset.headertype);
    localStorage.setItem('currentPagePagination', 1);
    el.target.href = "./catalog/index.html"
})
document.querySelector(".header-menu-bar").addEventListener("click", (e) => {
    document.querySelector(".header-menu-bar").classList.toggle("header-menu-bar__active");
    document.querySelector(".header-nav").classList.toggle("header-nav__active");
    document.querySelector(".header-list").classList.toggle("header-list__active");
})

const basketGoods = JSON.parse(localStorage.basketOfGoods);
document.getElementById("basketNum").innerText = basketGoods.length;

//section 2 - show 4 cards from allCards
for (let i = 0; i < allCards.length; i++) {
    document.querySelector(".section2-cards").append(allCards[i].addCard());
    if (i === 3) break;
}

const [...cards] = document.querySelectorAll(".card");

AuditCardClick(cards,allCards);

