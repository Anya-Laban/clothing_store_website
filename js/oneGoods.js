import { Card } from "./goods.js";
 
function GoodToBasket (name,collection,image,price) {
    this.name = name;
    this.collection = collection;
    this.image = image;
    this.price = price;
    this.color = null;
    this.size = null;
}

const storObj = JSON.parse(localStorage.currentGoods);
const currentGoods = new Card(storObj.name, storObj.photos, storObj.price, storObj.colors, storObj.size, storObj.reviews, storObj.details, storObj.type, storObj.collection)

const goodToBasket = new GoodToBasket (currentGoods.name,currentGoods.collection[0],currentGoods.photos[0],currentGoods.price),
addGoods = document.querySelector(".addCard-btn");

localStorage.setItem('currentPage',currentGoods.type[0]);
 
//-------------побудова сторінки по вибраному товару-------------
document.getElementById("currentPageCatalog").insertAdjacentText("beforeend",currentGoods.type[0].toUpperCase())
document.getElementById("currentGood").insertAdjacentText("beforeend",currentGoods.name.toUpperCase())

document.querySelector(".images__main-image").insertAdjacentHTML("beforeend", `<img src="${currentGoods.photos[0]}" alt="photo">`);
currentGoods.photos.forEach((photo)=>{
    document.querySelector(".images__all-image").insertAdjacentHTML("beforeend", `<img class = "all-image__image" src="${photo}" alt="photo">`)
})

document.querySelector(".header-info__name").insertAdjacentHTML("afterbegin",currentGoods.name);
document.querySelector(".header-info__collection").insertAdjacentHTML("beforeend",currentGoods.collection[0]);

document.querySelector(".reviews-info__stars").insertAdjacentHTML("afterbegin", currentGoods.drawRating());
document.querySelector(".reviews-info__allReviews").insertAdjacentHTML("afterbegin", `${currentGoods.allReviews()} REVIEWS`);

document.querySelector(".price-info__price").insertAdjacentHTML("afterbegin", `$${currentGoods.price}` );
document.querySelector(".color-info__colors").insertAdjacentHTML("afterbegin", currentGoods.drawColors() );
document.querySelector(".size-info__sizes").insertAdjacentHTML("afterbegin", currentGoods.drawSizes());

document.querySelector(".details__content").insertAdjacentHTML("afterbegin", currentGoods.details);

//--------------------------------------------------------------

// -----header-------------
const [...headerListItems] = document.querySelectorAll(".header-list__item>a[data-headerType]");

headerListItems.forEach((el)=>{
    el.addEventListener("click", (el)=>{
        localStorage.setItem('currentPage',el.target.dataset.headertype);
        localStorage.setItem('currentPagePagination', 1);
        el.target.href = "/catalog/index.html"
    })
})

document.querySelector(".header-menu-bar").addEventListener("click", (e) => {
    document.querySelector(".header-menu-bar").classList.toggle("header-menu-bar__active");
    document.querySelector(".header-nav").classList.toggle("header-nav__active");
    document.querySelector(".header-list").classList.toggle("header-list__active");
})

document.getElementById("currentGood").addEventListener("click",()=>document.location = "/goods/index.html")
const basketGoods = JSON.parse(localStorage.basketOfGoods);
document.getElementById("basketNum").innerText = basketGoods.length;

// -----зміна фото-------------
const [...allPhotos] = document.querySelectorAll(".all-image__image");
allPhotos.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(document.querySelector(".all-image__image-active")){
            document.querySelector(".all-image__image-active").classList.remove("all-image__image-active")
        }
        el.classList.add("all-image__image-active");
        document.querySelector(".images__main-image").innerHTML ="";
        document.querySelector(".images__main-image").insertAdjacentHTML("beforeend", `<img src="${el.src}" alt="photo">`);
    })
})

// -----зміна вибраного кольору-------------
const [...allColors] = document.querySelectorAll(".card-colors-color");
allColors.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(document.querySelector(".card-colors-color-active")){
            document.querySelector(".card-colors-color-active").classList.remove("card-colors-color-active")
        }
        addGoods.classList.remove("addCard-btn-active")
        el.classList.add("card-colors-color-active");
        goodToBasket.color = el.dataset.cardColor;
    })
})

// -----зміна вибраного розміру-------------
const [...allSizes] = document.querySelectorAll(".card-sizes-size");
allSizes.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(document.querySelector(".card-sizes-size-active")){
            document.querySelector(".card-sizes-size-active").classList.remove("card-sizes-size-active")
        }
        addGoods.classList.remove("addCard-btn-active")
        el.classList.add("card-sizes-size-active");
        goodToBasket.size = el.dataset.cardSize;
    })
})

// -----додання товару до кошика-------------

addGoods.addEventListener("click",()=>{ 
    if(goodToBasket.size !== null && goodToBasket.color !== null){
        const basket = JSON.parse(localStorage.basketOfGoods);
        basket.push(goodToBasket);
        localStorage.basketOfGoods = JSON.stringify(basket);
        addGoods.classList.add("addCard-btn-active");
        window.alert("Товар додано в корзину");
        
        const basketGoods = JSON.parse(localStorage.basketOfGoods);
        document.getElementById("basketNum").innerText = basketGoods.length;
    }
    else window.alert("Виберіть колір та розмір")
})