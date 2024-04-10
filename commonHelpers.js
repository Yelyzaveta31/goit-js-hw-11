import"./assets/vendor-b20c67ea.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const a=({tags:r,urls:{webformatURL:t}})=>`
    <li class="gallery-item">
    <a class=""gallery-link" href="${largeImageURL}"

      <img src="${t}" alt="${r}" class="gallery-img" />
    </li>
    <ul class="item-info">
    <li class="item-likes">
    <p class="title">Likes</p>
    <p class="value">${likes}</p>
    </li>
    li class="item-views">
    <p class="title">Views</p>
    <p class="value">${views}</p>
     </li>
     <li class="item-comments">
    <p class="title">Comments</p>
    <p class="value">${comments}</p>
    </li>
 <li class="item-downloads">
 <p class="title">Downloads</p>
<p class="value">${downloads}</p>
    </li>
    </ul>
    `,c=r=>fetch(`https://pixabay.com/api/?key=43329687-8aa5e523ea6ec5a66d8459b66&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}),n=document.querySelector(".search-form"),u=document.querySelector(".gallery"),m=r=>{r.preventDefault();const t=r.target.elements.user_image.value;c(t).then(l=>{const o=l.results.map(e=>a(e)).join("");u.innerHTML(o)}).catch(l=>{console.log(l)})};n.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
