import{i as l}from"./assets/vendor-8e8cd629.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=o=>{const{largeImageURL:t,webformatURL:s,tags:i,likes:e,views:r,comments:a,downloads:n}=o;return`
  <li class="gallery-item">
      <a class="gallery-link" href="${t}">
          <img src="${s}" alt="${i}" />
      </a>
  <ul class="item-info">
      <li class="item-likes">
          <p class="title">Likes</p>
          <p class="value">${e}</p>
      </li>
      <li class="item-views">
          <p class="title">Views</p>
          <p class="value">${r}</p>
      </li>
      <li class="item-comments">
          <p class="title">Comments</p>
          <p class="value">${a}</p>
      </li>
      <li class="item-downloads">
          <p class="title">Downloads</p>
          <p class="value">${n}</p>
      </li>
  </ul>
  </li>`};function m(o){return fetch(`https://pixabay.com/api/?key=43329687-8aa5e523ea6ec5a66d8459b66&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const c="/goit-js-hw-11/assets/icon-error-9b111c7b.svg",p=document.querySelector(".search-form"),f=document.querySelector(".gallery"),d=o=>{o.preventDefault();const t=o.target.elements.user_image.value;if(t===""){alert("Please enter a search query");return}m(t).then(s=>{if(s.hits.length===0)l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",theme:"dark",color:"red",iconUrl:c,position:"topRight"});else{const i=s.hits.map(e=>u(e)).join("");f.innerHTML=i}}).catch(s=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",theme:"dark",color:"red",iconUrl:c,position:"topRight"}),console.log(s)})};p.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
