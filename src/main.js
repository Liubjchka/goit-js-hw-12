import axios from 'axios';

import { refs } from './js/refs.js';
import { onLoader } from './js/switchBtn.js';
import { offLoader } from './js/switchBtn.js';
import { renderGallery } from './js/renderGallery.js';
import { beError } from './js/beError.js';
import { noImagesError } from './js/beError.js';
import { writeSomething } from './js/beError.js';
import { endSearchesRults } from './js/beError.js';
import { scrollPage } from './js/scrollPage.js';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMore.addEventListener('click', onLoadMore);

let query = '';
let page = 1;
const perPage = 15;

// ===========pixabayApi===========

async function pixabayApi(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY_API = '?key=42447990-17cd7de231c9689be9e26f0f6';
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const URL = BASE_URL + END_POINT + KEY_API + PARAMS;

  const resp = await axios.get(URL);
  return resp.data;
}
pixabayApi('potatos');

// ===========onFormSubmit===========

async function onFormSubmit(event) {
  event.preventDefault();

  page += 1;

  refs.galleryList.innerHTML = '';
  const query = event.target.elements.query.value.trim();

  if (!query) {
    refs.form.elements.input.value = '';
    beError(console.error());
    return;
  }

  onLoader();

  try {
    const answer = await pixabayApi(query);
    renderGallery(answer);
    statusBtn(answer, page);
    console.log(answer);
  } catch (error) {
    beError(noImagesError);
  } finally {
    offLoader();
  }
  refs.form.reset();
  refs.loadMore.classList.remove('hidden');
}

// ===========onLoadMore===========

async function onLoadMore() {
  onLoader();

  try {
    const answer = await pixabayApi(query);
    renderGallery(answer);
    scrollPage();
    offLoader();
  } catch (error) {
    beError(noImagesError);
  }
}

// ===============statusBt==========
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
