import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p=i=>{const{largeImageURL:s,webformatURL:t,tags:o,likes:e,views:r,comments:a,downloads:m}=i;return`
  <li class="gallery-item">
      <a class="gallery-link" href="${s}">
          <img src="${t}" alt="${o}" />
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
          <p class="value">${m}</p>
      </li>
  </ul>
  </li>`},h="https://pixabay.com",g="43329687-8aa5e523ea6ec5a66d8459b66";function f(i){const s=new URLSearchParams({key:g,q:i,orientation:"horizontal",safesearch:"true",image_type:"photo"});return fetch(`${h}/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.error(t)})}const d=document.querySelector(".search-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),y=i=>{i.preventDefault();const s=i.target.elements.user_image.value.trim();if(s===""){c.innerHTML="",l.warning({title:"Caution",message:"Please enter a search query",position:"topRight",timeout:2e3}),i.target.reset();return}n.classList.add("is-visible"),f(s).finally(()=>{n.classList.remove("is-visible")}).then(t=>{if(t.hits.length===0)c.innerHTML="",i.target.reset(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",timeout:3e3});else{const o=t.hits.map(e=>p(e)).join("");c.innerHTML=o,L.refresh()}}).catch(t=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",timeout:3e3}),console.log(t)})};d.addEventListener("submit",y);const L=new u(".gallery a");
//# sourceMappingURL=commonHelpers.js.map
