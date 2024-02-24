import{a as v,i as b,S}from"./assets/vendor-8acdc729.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const i={form:document.querySelector(".form"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),loadMore:document.querySelector(".btn-load-more"),input:document.querySelector("input")};function w(){i.loader.classList.remove("hidden")}function l(){i.loader.classList.add("hidden")}function u(){i.loadMore.classList.add("hidden")}function M(){i.loadMore.classList.remove("hidden")}async function p(e,r){u();const n=`https://pixabay.com/api/?key=42447990-17cd7de231c9689be9e26f0f6&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t={page:r,per_page:15};return(await v.get(n,{params:t})).data}const P="Sorry, there are no images matching your search query. Please try again!",q="Please, write something",E="We are sorry, but you have reached the end of search results.";function m(e){b.error({position:"topRight",message:e})}function $(e){const{largeImageURL:r,webformatURL:a,tags:n,likes:t,downloads:o,views:s,comments:L}=e;return`<li class="gallery-item">
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
            <div class="description-item"><p>Comments</p><span>${L}</span></div>
        </div>
      </li>`}function x(e){return e.map($).join("")}let d,f=1;const O=15;let g,c;i.form.addEventListener("submit",A);i.loadMore.addEventListener("click",I);async function A(e){if(e.preventDefault(),d=e.target.elements.input.value.trim(),!d){m(q),l(),u();return}w(),f=1;const r=await p(d,f);if(r.hits===""){m(P),l(),u();return}g=Math.ceil(r.totalHits/15),i.galleryList.innerHTML="",y(r.hits),l(),h(r),e.target.reset()}async function I(){f+=1;const e=await p(d,f);y(e.hits),h(e)}function y(e){const r=x(e);e.length>O&&i.loadMore.classList.remove("hidden"),e.length>0&&(i.galleryList.insertAdjacentHTML("beforeend",r),c&&c.destroy(),c=new S(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom"}),c.refresh())}function h(e){e>=g?(u(),l(),m(E)):M()}
//# sourceMappingURL=commonHelpers.js.map
