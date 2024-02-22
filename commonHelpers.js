import{a as p,i as f,S as g}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();async function l(e){const t="42447990-17cd7de231c9689be9e26f0f6",o="https://pixabay.com/api/",a=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,r=`${o}?key=${t}&${a}`;return(await p.get(r)).data}const s={container:document.querySelector(".container"),form:document.querySelector("#singleImagesForm"),btn:document.querySelector(".form-button"),loader:document.querySelector("#singleImages"),galleryList:document.querySelector(".gallery"),btnLoader:document.querySelector(".btn-loader"),loadMore:document.querySelector(".load-more")};function d(){s.loader.classList.remove("hidden")}function u(){s.loader.classList.add("hidden")}const y="Sorry, there are no images matching your search query. Please try again!";function i(e){f.error({position:"topRight",maxWidth:"432",backgroundColor:"#ef4040",messageColor:"#fafafb",messageSize:"16px",message:e})}function h(e){return`<li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img
            src="${e.webformatURL}"
            class="gallery-image"
            alt="${e.tags}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${e.likes}</span></div>
            <div class="description-item"><p>Downloads</p><span>${e.downloads}</span></div>
            <div class="description-item"><p>Views</p><span>${e.views}</span></div>
            <div class="description-item"><p>Comments</p><span>${e.comments}</span></div>
        </div>
      </li>`}function m(e){const t=e.hits.map(h).join("");if(e.hits.length){s.galleryList.insertAdjacentHTML("beforeend",t);const o=new g(".gallery a",{captions:!0,captionSelector:"img",captionPosition:"bottom",captionsData:"alt"});o.on("show.simplelightbox"),o.refresh()}else i(y)}s.form.addEventListener("submit",L);s.loadMore.addEventListener("click",b);async function L(e){e.preventDefault(),d(),s.galleryList.innerHTML="";const t=e.currentTarget.elements.input.value.trim();if(!t)return i(writeSomething);try{const o=await l(t);m(o)}catch{i(noImagesError)}finally{u()}s.form.reset()}function b(e){e.preventDefault(),e.target.elements.quary.value.trim(),d(),s.galleryList.innerHTML="";const t=e.currentTarget.elements.input.value.trim();if(!t)return i(writeSomething);try{const o=l(t);m(o)}catch{i(noImagesError)}finally{u()}s.form.reset()}
//# sourceMappingURL=commonHelpers.js.map
