import{a as f,i as g,S as y}from"./assets/vendor-483db976.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const c={form:document.querySelector(".form"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),loadMore:document.querySelector(".btn-load-more"),input:document.querySelector("input")};async function d(t,o){const a="https://pixabay.com",n="/api/",e="?key=42447990-17cd7de231c9689be9e26f0f6",r=`&q=${t}&image_type=photo&page=currentPage&orientation=horizontal&safesearch=true&per_page=15`,i=a+n+e+r;return(await f.get(i)).data}const u="Please, write something";function p(t){g.error({position:"topRight",message:t})}function h(t){const{largeImageURL:o,webformatURL:a,tags:n,likes:e,downloads:r,views:i,comments:l}=t;return`<li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img
            src="${a}"
            class="gallery-image"
            alt="${n}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${e}</span></div>
            <div class="description-item"><p>Downloads</p><span>${r}</span></div>
            <div class="description-item"><p>Views</p><span>${i}</span></div>
            <div class="description-item"><p>Comments</p><span>${l}</span></div>
        </div>
      </li>`}function L(t){return t.map(h).join("")}let s;const b=15;c.form.addEventListener("submit",v);c.loadMore.addEventListener("click",S);async function v(t){t.preventDefault(),s=t.target.elements.input.value.trim();const o=await d(s);if(!s){p(u);return}c.galleryList.innerHTML="",m(o.hits),t.target.reset()}async function S(){s=event.current.target.elements.input.value.trim();const t=await d(s);if(!s){p(u);return}m(t.hits)}function m(t){result=t.map(L).join(""),totalHits>b&&c.loadMore.classList.remove("hidden"),t.data.length&&(c.galleryList.insertAdjacentHTML("beforeend",result),new y(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom"}).refresh())}
//# sourceMappingURL=commonHelpers.js.map
