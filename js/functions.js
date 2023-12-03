
function Filter(arrColors=[],arrSize=[],arrType=[],arrCollection=[]){
    this.arrColors = arrColors;
    this.arrSize = arrSize;
    this.arrType = arrType;
    this.arrCollection = arrCollection;
}
function compareNumeric(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
function SearchAllFilters (arr){
   const filtersAll = new Filter()
    arr
    .forEach((el)=>{
        el.colors.forEach(element => {
            if(!filtersAll.arrColors.includes(element)) filtersAll.arrColors.push(element) 
        });
        el.size.forEach(element => {
            if(!filtersAll.arrSize.includes(element)) filtersAll.arrSize.push(element) 
        });
        el.type.forEach(element => {
            if(!filtersAll.arrType.includes(element)) filtersAll.arrType.push(element) 
        });
        el.collection.forEach(element => {
            if(!filtersAll.arrCollection.includes(element)) filtersAll.arrCollection.push(element) 
        });
    })
    filtersAll.arrSize.sort(compareNumeric);
    return filtersAll
}
export function ShowFilters(elementsToInsert, array){
    const filters = SearchAllFilters(array);
    let insertString =``;
    elementsToInsert.forEach((el)=>{
        switch(el.dataset.filter){
            case "size":
                filters.arrSize.forEach((elem)=>{
                    insertString +=`<div data-filter-size = "${elem}" class="filter-content__box">${elem}</div>`
                })
                el.insertAdjacentHTML("beforeend",insertString);
                insertString =``;
                break;
            case "color":
                filters.arrColors.forEach((elem)=>{
                    insertString +=`<div data-filter-color = "${elem.toLowerCase()}" class="filter-content__box">${elem}</div>`
                })
                el.insertAdjacentHTML("beforeend",insertString);
                insertString =``;
                break;
            case "type":
                filters.arrType.forEach((elem)=>{
                    insertString +=`<div data-filter-type = "${elem}" class="filter-content__box">${elem}</div>`
                })
                el.insertAdjacentHTML("beforeend",insertString);
                insertString =``;
                break;
            case "collection":
                filters.arrCollection.forEach((elem)=>{
                    insertString +=`<div data-filter-collection = "${elem}" class="filter-content__box">${elem}</div>`
                })
                el.insertAdjacentHTML("beforeend",insertString);
                insertString =``;
                break;
        }
    })
}

let applyingFiltersAll = new Filter()

function ApplyingFilter(appArray, nameFilter){
    if(appArray.includes(nameFilter)){
        appArray.splice(appArray.indexOf(nameFilter),1)
    }else appArray.push(nameFilter);
}
export function ApplyingFilters(element, modify){
    if(modify === "size"){
        ApplyingFilter(applyingFiltersAll.arrSize, parseInt(element.dataset.filterSize))
    } 
    else if(modify === "color"){
        ApplyingFilter(applyingFiltersAll.arrColors, element.dataset.filterColor)
    } 
    else if(modify === "type") {
        ApplyingFilter(applyingFiltersAll.arrType, element.dataset.filterType)
    }
    else if(modify === "collection"){
        ApplyingFilter(applyingFiltersAll.arrCollection, element.dataset.filterCollection)
    }
    element.classList.toggle("filter-content__box-active");
    return applyingFiltersAll;
}
// ============================
function ComparisonElementWithFilter(elArr,filterArr){
    if(filterArr.length === 0) return true
    for (let i = 0; i < elArr.length; i++) {
        for (let j = 0; j < filterArr.length; j++) {
            if(String(elArr[i]).toLowerCase() === String(filterArr[j]).toLowerCase()) {
                return true
            }
        }
    }
    return false
}
export function FiltredGoogs(array, objFilter){
    return array.filter((el)=>{
        if(ComparisonElementWithFilter(el.colors,objFilter.arrColors)) {
            if(ComparisonElementWithFilter(el.size,objFilter.arrSize)){
                if(ComparisonElementWithFilter(el.type,objFilter.arrType)){
                    if(ComparisonElementWithFilter(el.collection,objFilter.arrCollection)) return true
                }
            }
        }
        else return false
  })  
}
export function ShowFiltredGoods(array, objFilter,placeToIncert){
    const filtredCards = FiltredGoogs(array, objFilter);
    placeToIncert.innerHTML = '';;
    
    for (let i = 0; i < filtredCards.length; i++) {
        placeToIncert.append(filtredCards[i].addCardToCataloge());
    }
}
// ===========================
function HeaderApplyingFilter(appArray, nameFilter){
    if(!appArray.includes(nameFilter)) appArray.push(nameFilter); 
}
export function HeaderAplingFilters(element){
    applyingFiltersAll.arrColors =[];
    applyingFiltersAll.arrSize =[];
    applyingFiltersAll.arrCollection =[];
    applyingFiltersAll.arrType =[];
    HeaderApplyingFilter(applyingFiltersAll.arrType, element)
    return applyingFiltersAll;
}

//------search---------
function Validate( rex, val){
    return rex.test(val)
}
export function SearchGoods(array, pressText,placeToIncertNewArr, searchEl,numRows, currentPagePagination,lastPagePagination, paginationEl ){
    const newArr = []
    array.forEach(element => {
        if(Validate(new RegExp("^" + pressText ,"i") , element.name)){
            newArr.push(element)
        }
    });
    if(newArr.length>0){
        searchEl.classList.add("search-validate");
        searchEl.classList.remove("search-error");
    }
    else{
        searchEl.classList.remove("search-validate");
        searchEl.classList.add("search-error");
    }
    ShowGoodsWithPagination(FiltredGoogs(newArr, applyingFiltersAll), numRows, currentPagePagination, placeToIncertNewArr);
    ShowPagination(paginationEl,FiltredGoogs(newArr, applyingFiltersAll), numRows, currentPagePagination,lastPagePagination)
}

// -------pagination--------
function DrawPagination(countPages, currentPaginPage){
    let paginationList = ``;
    if(countPages > 5){
        if(currentPaginPage !== 1){
            paginationList = `<a class = "pagination__item" data-pag="start" a="#">&laquo;</a>`;
        }
        if(currentPaginPage <= 3){
            for (let i = 1; i <= 3; i++) {
                paginationList += `<a class = "pagination__item" data-pag="${i}" href="#">${i}</a>`;
            }
            paginationList += `<a class = "pagination__item" data-pag="right" href="#"> ... </a>
            <a class = "pagination__item" data-pag="${countPages}" href="#">${countPages}</a>`;
        }
        else if(currentPaginPage >= countPages-2){
            paginationList += `<a class = "pagination__item" data-pag="1" href="#">1</a>
            <a class = "pagination__item" data-pag="left" href="#"> ... </a>`;
            for (let i = countPages-2; i <= countPages; i++) {
                paginationList += `<a class = "pagination__item" data-pag="${i}" href="#">${i}</a>`;
            }
        }
        else{
            paginationList += `<a class = "pagination__item" data-pag="1" href="#">1</a>
            <a class = "pagination__item" data-pag="left" href="#"> ... </a>
            <a class = "pagination__item" data-pag="${currentPaginPage}" href="#">${currentPaginPage}</a>
            <a class = "pagination__item" data-pag="right" href="#"> ... </a>
            <a class = "pagination__item" data-pag="${countPages}" href="#">${countPages}</a>`;
        }
        if(currentPaginPage !== countPages ){
            paginationList += `<a class = "pagination__item" data-pag="end" href="#">»</a>`;
        }
    }
    else if(countPages < 2){
        for (let i = 1; i <= countPages; i++) {
            paginationList += `<a class = "pagination__item" data-pag="${i}" href="#">${i}</a>`;
        }
    }
    else{
        paginationList = `<a class = "pagination__item" data-pag="start" a="#">&laquo;</a>`;
        for (let i = 1; i <= countPages; i++) {
            paginationList += `<a class = "pagination__item" data-pag="${i}" href="#">${i}</a>`;
        }
        paginationList += `<a class = "pagination__item" data-pag="end" href="#">»</a>`;
    }    
    return paginationList;
}
function btnActive(currentPaginPage, lastPagPage){
    const [...btns] = document.querySelectorAll(".pagination__item");
    btns.map((el)=>{
        if(el.dataset.pag === lastPagPage){
            el.classList.remove("pagination__item--active");
        }
        if(el.dataset.pag === currentPaginPage){
            el.classList.add("pagination__item--active");
            return
        }
    })
}
export function ShowPagination(paginationElem, arrData, rowPerPage, currentPaginPage,lastPagPage) {
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    
    while(paginationElem.firstChild){
        paginationElem.removeChild(paginationElem.firstChild);
    }

    paginationElem.insertAdjacentHTML("afterbegin", DrawPagination(pagesCount, currentPaginPage));
    btnActive(currentPaginPage,lastPagPage);
}
export function ShowGoodsWithPagination(arrData, rowPerPage, page,cardsArea) {
    const paginatedData = GoodsWithPagination(arrData, rowPerPage, page);

    cardsArea.innerHTML = '';
    paginatedData.forEach( (el) => {
        cardsArea.append(el.addCardToCataloge())
    });
}
export function GoodsWithPagination(arrData, rowPerPage, page) {
    page--;
    const start = rowPerPage * page,
    end = start + rowPerPage,
    paginatedData = arrData.slice(start, end);
    return paginatedData;
}
// ---------------------------
export function AuditCardClick(cards, allArr){
    cards.forEach((card, index)=>{
        card.addEventListener("click",()=>{
            localStorage.currentGoods = JSON.stringify(allArr[index]);
            document.location = "../goods/"
        })
    })
}
export function AuditCardClickMainPage(cards, allArr){
    cards.forEach((card, index)=>{
        card.addEventListener("click",()=>{
            localStorage.currentGoods = JSON.stringify(allArr[index]);
            document.location = "./goods/"
        })
    })
}

//=============Basket=======================
export function ShowGoodsInbBasket(arrGoods, place, placeHeader){
    while(place.lastChild && place.lastChild !== placeHeader){
        place.removeChild(place.lastChild);
    }
    arrGoods.forEach(el => {
        let goods = `
            <li class="basket-li">
                <div class="basket-item">
                    <div class="basket-item__image"><img src="..${el.image}" alt="photo"></div>
                    <div class="basket-item__name">${el.name}</div>
                    <div class="basket-item__collection">${el.collection}</div>
                    <div class="basket-item__color">${el.color}</div>
                    <div class="basket-item__size">${el.size}</div>
                    <div class="basket-item__price">$<span>${el.price}</span></div>
                    <div class="basket-item__removeBtn"><i class="fa-solid fa-trash"></i></div>
                </div>
            </li>
        `
        place.insertAdjacentHTML("beforeend", goods);
    });
}

export function ShowAllPrice(arr,place) {
    place.innerHTML = '';
    let allPrice = 0;
    arr.forEach((el)=>{
        allPrice += parseFloat(el.price) ;
    })
    place.insertAdjacentHTML("beforeend", allPrice);
}