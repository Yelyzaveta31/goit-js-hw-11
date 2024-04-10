import"./assets/vendor-b20c67ea.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const c=s=>s.map(({largeImageURL:r,webformatURL:l,tags:i,likes:e,views:t,comments:o,downloads:a})=>`
    <li class="gallery-item">
    <a class=""gallery-link" href="${r}"

      <img src="${l}" alt="${i}" class="gallery-img" />
    </li>
    <ul class="item-info">
    <li class="item-likes">
    <p class="title">Likes</p>
    <p class="value">${e}</p>
    </li>
    li class="item-views">
    <p class="title">Views</p>
    <p class="value">${t}</p>
     </li>
     <li class="item-comments">
    <p class="title">Comments</p>
    <p class="value">${o}</p>
    </li>
 <li class="item-downloads">
 <p class="title">Downloads</p>
<p class="value">${a}</p>
    </li>
    </ul>`),n=s=>fetch(`https://pixabay.com/api/?key=43329687-8aa5e523ea6ec5a66d8459b66&query=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}),u=document.querySelector(".search-form"),m=document.querySelector(".gallery"),p=s=>{s.preventDefault();const r=s.target.elements.user_image.value;n(r).then(l=>{const e=l.map(t=>c(t)).join("");m.innerHTML(e)}).catch(l=>{console.log(l)})};u.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
