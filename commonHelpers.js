import{a as h,i as L,S as b}from"./assets/vendor-8acdc729.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const i={form:document.querySelector(".form"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),loadMore:document.querySelector(".btn-load-more"),input:document.querySelector("input")};function v(){i.loader.classList.remove("hidden")}function d(){i.loader.classList.add("hidden")}function S(){i.loadMore.classList.add("hidden")}function w(){i.loadMore.classList.remove("hidden")}async function u(e,o){const n=`https://pixabay.com/api/?key=42447990-17cd7de231c9689be9e26f0f6&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t={page:o,per_page:15};return(await h.get(n,{params:t})).data}const M="Please, write something",P="We are sorry, but you have reached the end of search results.";function p(e){L.error({position:"topRight",message:e})}function q(e){const{largeImageURL:o,webformatURL:a,tags:n,likes:t,downloads:r,views:c,comments:y}=e;return`<li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img
            src="${a}"
            class="gallery-image"
            alt="${n}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${t}</span></div>
            <div class="description-item"><p>Downloads</p><span>${r}</span></div>
            <div class="description-item"><p>Views</p><span>${c}</span></div>
            <div class="description-item"><p>Comments</p><span>${y}</span></div>
        </div>
      </li>`}function $(e){return e.map(q).join("")}let l,s=1;const x=15;let f;i.form.addEventListener("submit",E);i.loadMore.addEventListener("click",O);async function E(e){if(e.preventDefault(),l=e.target.elements.input.value.trim(),!l){p(M),d();return}v(),s=1;const o=await u(l,s);f=Math.ceil(o.totalHits/15),i.galleryList.innerHTML="",m(o.hits),d(),g(o,s),e.target.reset()}async function O(){s+=1;const e=await u(l,s);m(e.hits),g(e,s)}function m(e){const o=$(e);e.length>x&&i.loadMore.classList.remove("hidden"),e.length>0&&(i.galleryList.insertAdjacentHTML("beforeend",o),new b(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom"}).refresh())}function g(e,o){o>=f?(S(),d(),p(P)):w()}
//# sourceMappingURL=commonHelpers.js.map
