import{a as y,i as L,S as b}from"./assets/vendor-483db976.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const i={form:document.querySelector(".form"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),loadMore:document.querySelector(".btn-load-more"),input:document.querySelector("input")};async function u(e,r){const a="https://pixabay.com",n="/api/",t="?key=42447990-17cd7de231c9689be9e26f0f6",o=`&q=${e}&image_type=photo&page=currentPage&orientation=horizontal&safesearch=true&per_page=15`,s=a+n+t+o;return(await y.get(s)).data}const v="Please, write something",S="We are sorry, but you have reached the end of search results.";function M(e){L.error({position:"topRight",message:e})}function P(e){const{largeImageURL:r,webformatURL:a,tags:n,likes:t,downloads:o,views:s,comments:d}=e;return`<li class="gallery-item">
        <a href="${r}" class="gallery-link">
          <img
            src="${a}"
            class="gallery-image"
            alt="${n}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${t}</span></div>
            <div class="description-item"><p>Downloads</p><span>${o}</span></div>
            <div class="description-item"><p>Views</p><span>${s}</span></div>
            <div class="description-item"><p>Comments</p><span>${d}</span></div>
        </div>
      </li>`}function w(e){return e.map(P).join("")}function p(){i.loader.classList.remove("hidden")}function f(){i.loader.classList.add("hidden")}function q(){i.loadMore.classList.add("hidden")}function E(){i.loadMore.classList.remove("hidden")}let c,l=1;const m=15;i.form.addEventListener("submit",$);i.loadMore.addEventListener("click",x);async function $(e){e.preventDefault(),c=e.target.elements.input.value.trim(),l=1,p();const r=await u(c);if(h(),Math.ceil(r.totalHits/m),!c){M(v);return}i.galleryList.innerHTML="",g(r.hits),f(),e.target.reset()}async function x(){l+=1;const e=await u(c);h(),g(e.hits)}function g(e){result=e.map(w).join(""),totalHits>m&&i.loadMore.classList.remove("hidden"),e.data.length&&(i.galleryList.insertAdjacentHTML("beforeend",result),new b(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom"}).refresh())}function h(){const e=Math.ceil(data.totalHits/15);l>=e?(q(),f(),iziToast.error(S)):(E(),p())}
//# sourceMappingURL=commonHelpers.js.map
