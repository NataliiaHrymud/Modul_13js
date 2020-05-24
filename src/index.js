'use strict';

import pixiApi from './js/fetchApi.js';
import './styles.css';
import galleryItemTamplate from './templates/galleryItemTamplate.hbs'

const inp = document.querySelector('#inp');
const search = document.querySelector('#search');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('button[data-action="Load-more"]');
let curPage = 0;

search.addEventListener('click', onSearchClick);  
loadMoreBtn.addEventListener('click', onLoadMore);

const LOCAL_STOR = 'GETFETCH';
if (localStorage.getItem(LOCAL_STOR)){
    // console.log(localStorage.getItem(LOCAL_STOR));
    inp.value = localStorage.getItem(LOCAL_STOR);
}

function onSearchClick(e){
    localStorage.setItem(LOCAL_STOR, inp.value);
    curPage++;
    search.innerHTML = curPage + '';
        // console.log(inp.value);
    pixiApi (inp.value, curPage, onDataCome);
}  

function onDataCome(data){
    console.log(data.hits);
    const newHTML = galleryItemTamplate(data.hits);
    gallery.insertAdjacentHTML('beforeend', newHTML);
}

function onLoadMore () {
    curPage++;
    console.log(curPage);
    pixiApi (inp.value, curPage, onDataCome);
}