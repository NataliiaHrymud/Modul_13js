const KEY ='16179097-8566271ab112e51de35a43208';
const PER_PAGE = 12;
let url;

export default function pixiApi(search, curPage, callBack){
    url=`https://pixabay.com/api/?q=${search}&page=${curPage}&per_page=${PER_PAGE}&key=${KEY}`;
    fetch(url).then(j=>j.json()).then(data=>callBack(data)).catch(e=>console.log('WE SEE ERROR: ', e));
}



// const REQUEST_URL = 'https://pixabay.com/api/';
// const API_KEY = '16131668-a6b5f889764d48a111b29e31c';
// const LCID = 'LCID';
// const localData = localStorage.getItem(LCID);
// let localStoregeData = {};

// export default function getImageList(
//   searchText,
//   currentPage,
//   arrLength,
//   addImageData,
// ) {
//   if (localData) {
//     localStoregeData = JSON.parse(localData);
//   }
//   if (localStoregeData[searchText + currentPage]) {
//     addImageData(localStoregeData[searchText + currentPage]);
//     return;
//   }
//   fetch(
//     `${REQUEST_URL}?image_type=photo&orientation=horizontal&q=${searchText}&page=${currentPage}&per_page=${arrLength}&key=${API_KEY}`,
//   )
//     .then(data => data.json())
//     .then(imageData => {
//       addImageData(imageData.hits);
//       localStoregeData[searchText + currentPage] = imageData.hits;
//       localStorage.setItem(LCID, JSON.stringify(localStoregeData));
//     }).catch(e=>console.log('WE SEE ERROR: ', e));
// }


// const baseUrl = 'https://pixabay.com/api/';

// export default {
//     page: 1,
//     fetchPixiApi(query){
//         const options = {
//             headers:{
//                 Authorithation: '16179097-8566271ab112e51de35a43208',
//             }
//         }
//         const requestParam=`?q=${query}&page=${this.page}`;

//         fetch(baseUrl + requestParam, options)
//         .then(response => response.json)
//         .then(data=>{
//             console.log(data);
//         });
//     }, 
// };