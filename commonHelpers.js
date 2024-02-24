import{a as L,i as b,S as v}from"./assets/vendor-8acdc729.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const i={form:document.querySelector(".form"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),loadMore:document.querySelector(".btn-load-more"),input:document.querySelector("input")};async function d(e,o){const n=`https://pixabay.com/api/?key=42447990-17cd7de231c9689be9e26f0f6&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t={page:o,per_page:15};return(await L.get(n,{params:t})).data}const M="Sorry, there are no images matching your search query. Please try again!",S="Please, write something";function u(e){b.error({position:"topRight",message:e})}function w(e){const{largeImageURL:o,webformatURL:s,tags:n,likes:t,downloads:r,views:a,comments:h}=e;return`<li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img
            src="${s}"
            class="gallery-image"
            alt="${n}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${t}</span></div>
            <div class="description-item"><p>Downloads</p><span>${r}</span></div>
            <div class="description-item"><p>Views</p><span>${a}</span></div>
            <div class="description-item"><p>Comments</p><span>${h}</span></div>
        </div>
      </li>`}function P(e){return e.map(w).join("")}function m(){i.loader.classList.remove("hidden")}function p(){i.loader.classList.add("hidden")}function q(){i.loadMore.classList.add("hidden")}function E(){i.loadMore.classList.remove("hidden")}let l,c=1;const f=15;i.form.addEventListener("submit",$);i.loadMore.addEventListener("click",x);async function $(e){e.preventDefault(),l=e.target.elements.input.value.trim(),m(),c=1;const o=await d(l,c);if(y(o),Math.ceil(o.totalHits/f),!l){u(S);return}i.galleryList.innerHTML="",g(o.hits),p(),e.target.reset()}async function x(){c+=1;const e=await d(l,c);y(e),g(e.hits)}function g(e){const o=P(e);e.length>f&&i.loadMore.classList.remove("hidden"),e.length>0&&(i.galleryList.insertAdjacentHTML("beforeend",o),new v(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom"}).refresh())}function y(e){const o=Math.ceil(e.totalHits/15);c>=o?(q(),p(),u(M)):(E(),m())}
//# sourceMappingURL=commonHelpers.js.map
