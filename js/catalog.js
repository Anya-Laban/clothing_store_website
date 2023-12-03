import allCards from './goods.js'
import {
  ShowFilters,
  ApplyingFilters,
  FiltredGoogs,
  HeaderAplingFilters,
  SearchGoods,
  ShowPagination,
  ShowGoodsWithPagination,
  GoodsWithPagination,
  AuditCardClick,
} from './functions.js'

// -----header-------

let clientFilter
let currentPage = localStorage.getItem('currentPage')

clientFilter = HeaderAplingFilters(currentPage)

// -------pagination--------
const paginationEl = document.querySelector('.main-section__pagination')
let currentPagePagination = localStorage.getItem('currentPagePagination'),
  lastPagePagination = currentPagePagination
const numRows = 9

document.querySelector('#currentPage').innerHTML = ''
document
  .querySelector('#currentPage')
  .insertAdjacentText('afterbegin', currentPage)

const basketGoods = JSON.parse(localStorage.basketOfGoods)
document.getElementById('basketNum').innerText = basketGoods.length

document.querySelector('.header-menu-bar').addEventListener('click', (e) => {
  document
    .querySelector('.header-menu-bar')
    .classList.toggle('header-menu-bar__active')
  document.querySelector('.header-nav').classList.toggle('header-nav__active')
  document.querySelector('.header-list').classList.toggle('header-list__active')
})

// -----filters-------
const [...filterContents] = document.querySelectorAll('.filter_content')
ShowFilters(filterContents, allCards) //вивід фільтрів

const [...filterText] = document.querySelectorAll('.filter_text')
filterText.forEach((el) => {
  el.addEventListener('click', () => {
    el.lastElementChild.classList.toggle('filter-text__arrow-active')
    el.nextElementSibling.classList.toggle('filter_content-active')
  })
})

const [...filterContentBoxes] = document.querySelectorAll(
  '.filter-content__box'
)

// при першому завантаженні сторінки виводити включенні та виключенні фільтри
filterContentBoxes.forEach((el) => {
  el.addEventListener('click', () => {
    //накладання фільтрів
    clientFilter = ApplyingFilters(el, el.parentNode.dataset.filter)
    //вивід карток які підходять під фільтр
    localStorage.setItem('currentPagePagination', 1)
    currentPagePagination = localStorage.getItem('currentPagePagination')

    ShowGoodsWithPagination(
      FiltredGoogs(allCards, clientFilter),
      numRows,
      currentPagePagination,
      document.querySelector('.main-section__goods')
    )
    ShowPagination(
      paginationEl,
      FiltredGoogs(allCards, clientFilter),
      numRows,
      currentPagePagination,
      lastPagePagination
    )
    AuditCardClick(
      document.querySelectorAll('.card'),
      GoodsWithPagination(
        FiltredGoogs(allCards, clientFilter),
        numRows,
        currentPagePagination
      )
    )
  })
})
filterContentBoxes.forEach((elem) => {
  if (elem.dataset.filterType === currentPage) {
    elem.classList.add('filter-content__box-active')
  } else elem.classList.remove('filter-content__box-active')
})

const [...headerListItems] = document.querySelectorAll(
  '.header-list__item>a[data-headerType]'
)

headerListItems.forEach((el) => {
  el.addEventListener('click', (el) => {
    localStorage.setItem('currentPage', el.target.dataset.headertype)
    currentPage = localStorage.getItem('currentPage')

    localStorage.setItem('currentPagePagination', 1)
    currentPagePagination = localStorage.getItem('currentPagePagination')

    clientFilter = HeaderAplingFilters(currentPage)
    filterContentBoxes.forEach((elem) => {
      if (elem.dataset.filterType === currentPage) {
        elem.classList.add('filter-content__box-active')
      } else elem.classList.remove('filter-content__box-active')
    })

    ShowGoodsWithPagination(
      FiltredGoogs(allCards, clientFilter),
      numRows,
      currentPagePagination,
      document.querySelector('.main-section__goods')
    )
    ShowPagination(
      paginationEl,
      FiltredGoogs(allCards, clientFilter),
      numRows,
      currentPagePagination,
      lastPagePagination
    )
    AuditCardClick(
      document.querySelectorAll('.card'),
      GoodsWithPagination(
        FiltredGoogs(allCards, clientFilter),
        numRows,
        currentPagePagination
      )
    )

    document.querySelector('#currentPage').innerHTML = ''
    document
      .querySelector('#currentPage')
      .insertAdjacentText('afterbegin', currentPage)
  })
})

//------search---------
const searchEl = document.querySelector('.search-catalog')
searchEl.addEventListener('change', (e) => {
  localStorage.setItem('currentPagePagination', 1)
  currentPagePagination = localStorage.getItem('currentPagePagination')

  SearchGoods(
    allCards,
    e.target.value,
    document.querySelector('.main-section__goods'),
    searchEl,
    numRows,
    currentPagePagination,
    lastPagePagination,
    paginationEl
  )
  AuditCardClick(
    document.querySelectorAll('.card'),
    GoodsWithPagination(
      FiltredGoogs(allCards, clientFilter),
      numRows,
      currentPagePagination
    )
  )
})

// -------pagination--------

ShowPagination(
  paginationEl,
  FiltredGoogs(allCards, clientFilter),
  numRows,
  currentPagePagination,
  lastPagePagination
)
ShowGoodsWithPagination(
  FiltredGoogs(allCards, clientFilter),
  numRows,
  currentPagePagination,
  document.querySelector('.main-section__goods')
)
AuditCardClick(
  document.querySelectorAll('.card'),
  GoodsWithPagination(
    FiltredGoogs(allCards, clientFilter),
    numRows,
    currentPagePagination
  )
)

paginationEl.addEventListener('click', (e) => {
  const countPages = Math.ceil(
    FiltredGoogs(allCards, clientFilter).length / numRows
  )
  if (e.target.dataset.pag !== undefined && e.target.dataset.pag !== NaN) {
    lastPagePagination = currentPagePagination
    if (e.target.dataset.pag === 'start') {
      localStorage.setItem('currentPagePagination', 1)
    } else if (e.target.dataset.pag === 'end') {
      localStorage.setItem('currentPagePagination', countPages)
    } else if (e.target.dataset.pag === 'right') {
      localStorage.setItem('currentPagePagination', currentPagePagination++)
    } else if (e.target.dataset.pag === 'left') {
      localStorage.setItem('currentPagePagination', currentPagePagination--)
    } else {
      localStorage.setItem(
        'currentPagePagination',
        Number(e.target.dataset.pag)
      )
    }
  }
  currentPagePagination = localStorage.getItem('currentPagePagination')

  ShowPagination(
    paginationEl,
    FiltredGoogs(allCards, clientFilter),
    numRows,
    currentPagePagination,
    lastPagePagination
  )
  ShowGoodsWithPagination(
    FiltredGoogs(allCards, clientFilter),
    numRows,
    currentPagePagination,
    document.querySelector('.main-section__goods')
  )
  AuditCardClick(
    document.querySelectorAll('.card'),
    GoodsWithPagination(
      FiltredGoogs(allCards, clientFilter),
      numRows,
      currentPagePagination
    )
  )
})
