import{a as y,i as L,S as b}from"./assets/vendor-8acdc729.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const i={form:document.querySelector(".form"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),loadMore:document.querySelector(".btn-load-more"),input:document.querySelector("input")};async function d(e,o){const s=`https://pixabay.com/api/?key=42447990-17cd7de231c9689be9e26f0f6&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t={page:o,per_page:15};return(await y.get(s,{params:t})).data}const v="Please, write something",M="We are sorry, but you have reached the end of search results.";function S(e){L.error({position:"topRight",message:e})}function w(e){const{largeImageURL:o,webformatURL:n,tags:s,likes:t,downloads:r,views:a,comments:h}=e;return`<li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img
            src="${n}"
            class="gallery-image"
            alt="${s}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${t}</span></div>
            <div class="description-item"><p>Downloads</p><span>${r}</span></div>
            <div class="description-item"><p>Views</p><span>${a}</span></div>
            <div class="description-item"><p>Comments</p><span>${h}</span></div>
        </div>
      </li>`}function P(e){return e.map(w).join("")}function u(){i.loader.classList.remove("hidden")}function p(){i.loader.classList.add("hidden")}function $(){i.loadMore.classList.add("hidden")}function q(){i.loadMore.classList.remove("hidden")}let l,c=1;const f=15;i.form.addEventListener("submit",x);i.loadMore.addEventListener("click",E);async function x(e){e.preventDefault(),l=e.target.elements.input.value.trim(),c=1,u();const o=await d(l,c);if(g(o),Math.ceil(o.totalHits/f),!l){S(v);return}i.galleryList.innerHTML="",m(o.hits),p(),e.target.reset()}async function E(){c+=1;const e=await d(l,c);g(e),m(e.hits)}function m(e){const o=P(e);e.length>f&&i.loadMore.classList.remove("hidden"),e.length>0&&(i.galleryList.insertAdjacentHTML("beforeend",o),new b(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom"}).refresh())}function g(e){const o=Math.ceil(e.totalHits/15);c>=o?($(),p(),iziToast.error(M)):(q(),u())}
//# sourceMappingURL=commonHelpers.js.map
