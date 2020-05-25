const KEY ='16179097-8566271ab112e51de35a43208';
const PER_PAGE = 12;
let url;

export default function pixiApi(search, curPage, callBack){
    url=`https://pixabay.com/api/?q=${search}&page=${curPage}&per_page=${PER_PAGE}&key=${KEY}`;
    fetch(url).then(j=>j.json()).then(data=>callBack(data)).catch(e=>console.log('WE SEE ERROR: ', e));
}

//  ************ из вебинара Репеты***************
// при выполнении такого кода у меня выскакивала ошибка связанная с кросс-доменом.
// KEY"Access to fetch at 'https://pixabay.com/api/?q=dog&page=1' from origin 'http://127.0.0.1:5502' 
// has been blocked by CORS policy: Response to preflight request doesn''t pass access control check: 
// No 'Access-Control-Allow-Origin' header is present on the requested resource. 
// If an opaque response serves your needs, 
// set the request''s mode to 'no-cors' to fetch the resource with CORS disabled." 

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