import{a as b,i as S,S as w}from"./assets/vendor-8acdc729.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const i={form:document.querySelector(".form"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),loadMore:document.querySelector(".btn-load-more"),input:document.querySelector("input")};function M(){i.loader.classList.remove("hidden")}function u(){i.loader.classList.add("hidden")}function f(){i.loadMore.classList.add("hidden")}function P(){i.loadMore.classList.remove("hidden")}async function m(e,o){f();const n=`https://pixabay.com/api/?key=42447990-17cd7de231c9689be9e26f0f6&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t={page:o,per_page:15};return(await b.get(n,{params:t})).data}const q="Please, write something",$="We are sorry, but you have reached the end of search results.";function g(e){S.error({position:"topRight",message:e})}function E(e){const{largeImageURL:o,webformatURL:c,tags:n,likes:t,downloads:r,views:a,comments:v}=e;return`<li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img
            src="${c}"
            class="gallery-image"
            alt="${n}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${t}</span></div>
            <div class="description-item"><p>Downloads</p><span>${r}</span></div>
            <div class="description-item"><p>Views</p><span>${a}</span></div>
            <div class="description-item"><p>Comments</p><span>${v}</span></div>
        </div>
      </li>`}function x(e){return e.map(E).join("")}let d,s;const y=15;let p,l;i.form.addEventListener("submit",O);i.loadMore.addEventListener("click",A);async function O(e){if(e.preventDefault(),d=e.target.elements.input.value.trim(),!d){g(q),u(),f();return}M(),s=1;const o=await m(d,s);i.galleryList.innerHTML="",h(o.hits),u(),L(o,s),e.target.reset()}async function A(){s+=1;const e=await m(d,s);h(e.hits),L(e,s)}function h(e){const o=x(e);e.length>y&&i.loadMore.classList.remove("hidden"),e.length>0&&(i.galleryList.insertAdjacentHTML("beforeend",o),l&&l.destroy(),l=new w(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom"}),l.refresh())}function L(e,o){p=Math.ceil(e.totalHits/y),o>=p?(f(),u(),g($)):P()}
//# sourceMappingURL=commonHelpers.js.map
