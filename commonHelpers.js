import{S as h,i as L,a as v}from"./assets/vendor-da186403.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const s={container:document.querySelector(".container"),form:document.querySelector(".form"),btn:document.querySelector(".form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),loadMore:document.querySelector(".btn-load-more")};function u(){s.loader.classList.remove("hidden")}function m(){s.loader.classList.add("hidden")}function b(e){const{largeImageURL:o,webformatURL:i,tags:a,likes:t,downloads:r,views:n,comments:y}=e;return`<li class="gallery-item">
        <a href="${o}" class="gallery-link">
          <img
            src="${i}"
            class="gallery-image"
            alt="${a}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${t}</span></div>
            <div class="description-item"><p>Downloads</p><span>${r}</span></div>
            <div class="description-item"><p>Views</p><span>${n}</span></div>
            <div class="description-item"><p>Comments</p><span>${y}</span></div>
        </div>
      </li>`}function f(e){const o=e.data.map(b).join("");totalHits>perPage&&s.loadMore.classList.remove("hidden"),e.data.length&&(s.galleryList.insertAdjacentHTML("beforeend",o),new h(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom"}).refresh())}const p="Sorry, there are no images matching your search query. Please try again!",S="Please, write something",w="We are sorry, but you have reached the end of search results.";function l(e){L.error({position:"topRight",maxWidth:"432",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",message:e})}function $(){if(page>1){const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,left:0,behavior:"smooth"})}}let c="",d=1;async function g(e){const o="42447990-17cd7de231c9689be9e26f0f6",i="https://pixabay.com/api/",a=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t=`${i}?key=${o}&${a}`;return(await v.get(t)).data}s.form.addEventListener("submit",q);s.loadMore.addEventListener("click",M);async function q(e){if(e.preventDefault(),d+=1,s.galleryList.innerHTML="",c=e.currentTarget.elements.input.value.trim(),!c){s.form.elements.input.value="",l(S);return}u();try{const o=await g(c);f(o),P(o,d)}catch{l(p)}finally{m()}s.form.reset(),s.loadMore.classList.remove("hidden")}async function M(){u();try{const e=await g(c);f(e),$(),m()}catch{l(p)}}function P(e,o){const i=Math.ceil(e.totalHits/15);console.log(i),i<=o?(s.loadMore.classList.add("hidden"),s.loader.classList.add("hidden"),iziToast.error(w)):s.loadMore.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
