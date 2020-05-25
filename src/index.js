'use strict';

import pixiApi from './js/fetchApi.js';
import './styles.css';
import galleryItemTamplate from './templates/galleryItemTamplate.hbs'

const refs = {
    inp: document.querySelector('#inp'),
    search: document.querySelector('#search'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('button[data-action="Load-more"]')
}

let curPage = 0;

refs.search.addEventListener('click', onSearchClick);  
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const LOCAL_STOR = 'GETFETCH';
if (localStorage.getItem(LOCAL_STOR)){
    inp.value = localStorage.getItem(LOCAL_STOR);
}

function onSearchClick(e){
    localStorage.setItem(LOCAL_STOR, inp.value);
    curPage++;
    search.innerHTML = curPage + '';
    pixiApi (refs.inp.value, curPage, onDataCome);
}  

function onDataCome(data){
    console.log(data.hits);
    const newHTML = galleryItemTamplate(data.hits);
    refs.gallery.insertAdjacentHTML('beforeend', newHTML);
    setTimeout(()=>{
        window.scrollTo ({
            top: 3000,
            behavior: 'smooth'
        })
    }), 1000
}

function onLoadMore () {
    curPage++;
    pixiApi (inp.value, curPage, onDataCome);
}