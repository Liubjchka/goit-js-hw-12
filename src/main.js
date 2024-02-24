import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './js/refs.js';
import { pixabayApi } from './js/pixabayApi.js';
import { beError } from './js/beError.js';
import { writeSomething } from './js/beError.js';
import { hitElements } from './js/hitElements.js';
import { endSearchesRults } from './js/beError.js';
import {
  offBtnLoadMore,
  offLoader,
  onBtnLoadMore,
  onLoader,
} from './js/switchBtn.js';

let query;
let page = 1;
const perPage = 15;

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(event) {
  event.preventDefault();
  query = event.target.elements.input.value.trim();
  page = 1;

  onLoader();

  const data = await pixabayApi(query, page);
  statusBtn();
  // console.log(data);
  const maxPage = Math.ceil(data.totalHits / perPage);
  if (!query) {
    beError(writeSomething);
    return;
  }
  refs.galleryList.innerHTML = '';
  renderGallery(data.hits);

  offLoader();

  event.target.reset();
}

async function onLoadMoreClick() {
  page += 1;
  const data = await pixabayApi(query, page);
  statusBtn();
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

function statusBtn() {
  const maxPage = Math.ceil(data.totalHits / 15);
  if (page >= maxPage) {
    offBtnLoadMore();
    offLoader();
    iziToast.error(endSearchesRults);
  } else {
    onBtnLoadMore();
    onLoader();
  }
}
