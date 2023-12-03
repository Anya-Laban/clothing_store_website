import { ShowGoodsInbBasket,ShowAllPrice } from "./functions.js";

const basketGoods = JSON.parse(localStorage.basketOfGoods),
basketUl = document.querySelector(".basket-ul"),
basketliHeader = document.querySelector(".basket-ul > .basket-li-header"),
basketTotalPrice = document.querySelector(".total-price > span");

const [...headerListItems] = document.querySelectorAll(".header-list__item>a[data-headerType]");
headerListItems.forEach((el)=>{
    el.addEventListener("click", (el)=>{
        localStorage.setItem('currentPage',el.target.dataset.headertype);
        localStorage.setItem('currentPagePagination', 1);
        el.target.href = "../../catalog/index.html"
    })
})
document.querySelector(".header-menu-bar").addEventListener("click", (e) => {
    document.querySelector(".header-menu-bar").classList.toggle("header-menu-bar__active");
    document.querySelector(".header-nav").classList.toggle("header-nav__active");
    document.querySelector(".header-list").classList.toggle("header-list__active");
})

ShowGoodsInbBasket(basketGoods, basketUl,basketliHeader);
ShowAllPrice(basketGoods,basketTotalPrice)

const [...removeBtns] = document.querySelectorAll(".basket-item__removeBtn");
removeBtns.forEach((btn,index)=>{
    btn.addEventListener("click", ()=>{
        basketGoods.splice(index, 1);
        localStorage.basketOfGoods = JSON.stringify(basketGoods);
        document.location = "../../basket/index.html"
    })
});

document.querySelector(".buy-btn").addEventListener("click",()=>{
    window.alert("Покупку оформлено");
    localStorage.basketOfGoods = JSON.stringify([]);
    document.location = "../../basket/index.html"
})



