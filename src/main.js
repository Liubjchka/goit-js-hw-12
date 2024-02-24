import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './js/refs.js';
import { pixabayApi } from './js/pixabayApi.js';
import { beError, noImagesError } from './js/beError.js';
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
let maxPage;
let lightbox;

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(event) {
  event.preventDefault();
  query = event.target.elements.input.value.trim();

  if (!query) {
    beError(writeSomething);
    offLoader();
    offBtnLoadMore();
    return;
  }

  onLoader();
  page = 1;
  const data = await pixabayApi(query, page);

  maxPage = Math.ceil(data.totalHits / 15);
  refs.galleryList.innerHTML = '';
  renderGallery(data.hits);
  offLoader();

  statusHiddenBtn(data, page);
  event.target.reset();
}

async function onLoadMoreClick() {
  page += 1;
  const data = await pixabayApi(query, page);
  renderGallery(data.hits);
  statusHiddenBtn(data, page);
}

function renderGallery(hits) {
  const result = hitElements(hits);

  if (hits.length > perPage) {
    refs.loadMore.classList.remove('hidden');
  }

  if (hits.length > 0) {
    refs.galleryList.insertAdjacentHTML('beforeend', result);

    if (lightbox) {
      lightbox.destroy();
    }

    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: 'img',
      captionPosition: 'bottom',
    });

    lightbox.refresh();
  }
}

function statusHiddenBtn(page) {
  if (page >= maxPage) {
    offBtnLoadMore();
    offLoader();
    beError(endSearchesRults);
  } else {
    onBtnLoadMore();
  }
}
