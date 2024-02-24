import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './js/refs.js';
import { pixabayApi } from './js/pixabayApi.js';
import { beError } from './js/beError.js';
import { writeSomething } from './js/beError.js';
import { hitElements } from './js/hitElements.js';
import { endSearchesRults } from './js/beError.js';

let query;
let page = 1;
const perPage = 15;

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(event) {
  event.preventDefault();
  query = event.target.elements.input.value.trim();
  page = 1;
  const data = await pixabayApi(query, page);
  if (!query) {
    beError(writeSomething);
    return;
  }
  refs.galleryList.innerHTML = '';
  renderGallery(data.hits);

  event.target.reset();
}

async function onLoadMoreClick() {
  query = event.current.target.elements.input.value.trim();
  page += 1;
  const data = await pixabayApi(query, page);
  if (!query) {
    beError(writeSomething);
    return;
  }

  renderGallery(data.hits);
}

function renderGallery(hits) {
  result = hits.map(hitElements).join('');
  if (totalHits > perPage) {
    refs.loadMore.classList.remove('hidden');
  }
  if (hits.data.length) {
    refs.galleryList.insertAdjacentHTML('beforeend', result);

    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: 'img',
      captionPosition: 'bottom',
    });

    lightbox.refresh();
  }
}

function statusBtn(data, page) {
  const maxPage = Math.ceil(data.totalHits / 15);
  console.log(maxPage);
  if (maxPage <= page) {
    refs.loadMore.classList.add('hidden');
    refs.loader.classList.add('hidden');
    iziToast.error(endSearchesRults);
  } else {
    refs.loadMore.classList.remove('hidden');
  }
}
