import{a as y,i as L,S as b}from"./assets/vendor-8acdc729.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const i={form:document.querySelector(".form"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),loadMore:document.querySelector(".btn-load-more"),input:document.querySelector("input")};async function d(e,o){const s=`https://pixabay.com/api/?key=42447990-17cd7de231c9689be9e26f0f6&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t={page:o,per_page:15};return(await y.get(s,{params:t})).data}const v="Please, write something",M="We are sorry, but you have reached the end of search results.";function S(e){L.error({position:"topRight",message:e})}function w(e){const{largeImageURL:o,webformatURL:l,tags:s,likes:t,downloads:r,views:n,comments:h}=e;return`<li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img
            src="${l}"
            class="gallery-image"
            alt="${s}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${t}</span></div>
            <div class="description-item"><p>Downloads</p><span>${r}</span></div>
            <div class="description-item"><p>Views</p><span>${n}</span></div>
            <div class="description-item"><p>Comments</p><span>${h}</span></div>
        </div>
      </li>`}function P(e){return e.map(w).join("")}function u(){i.loader.classList.remove("hidden")}function p(){i.loader.classList.add("hidden")}function $(){i.loadMore.classList.add("hidden")}function q(){i.loadMore.classList.remove("hidden")}let a,c=1;const f=15;i.form.addEventListener("submit",x);i.loadMore.addEventListener("click",E);async function x(e){e.preventDefault(),a=e.target.elements.input.value.trim(),c=1,u();const o=await d(a,c);if(g(o),Math.ceil(o.totalHits/f),!a){S(v);return}i.galleryList.innerHTML="",m(o.hits),p(),e.target.reset()}d(a);async function E(){c+=1;const e=await d(a,c);g(e),m(e.hits)}function m(e){result=e.map(P).join(""),totalHits>f&&i.loadMore.classList.remove("hidden"),e.data.length&&(i.galleryList.insertAdjacentHTML("beforeend",result),new b(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom"}).refresh())}function g(e){const o=Math.ceil(e.totalHits/15);c>=o?($(),p(),iziToast.error(M)):(q(),u())}
//# sourceMappingURL=commonHelpers.js.map
