import { pixabayApi } from './js/pixabayApi.js';
import { refs } from './js/refs.js';
import { watchLoader, offLoader } from './js/loader.js';
import { renderGallery } from './js/renderGallery.js';
import { beError } from './js/beError.js';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMore.addEventListener('click', onLoadMore);

// ===========onFormSubmit===========

async function onFormSubmit(event) {
  event.preventDefault();

  watchLoader();

  refs.galleryList.innerHTML = '';
  const userTag = event.currentTarget.elements.input.value.trim();

  if (!userTag) {
    return beError(writeSomething);
  }

  try {
    const answer = await pixabayApi(userTag);
    renderGallery(answer);
  } catch (error) {
    beError(noImagesError);
  } finally {
    offLoader();
  }
  refs.form.reset();
}

// ===========onLoadMore===========

let queryEl;
let pageEl;
let maxPageEl;

function onLoadMore(event) {
  event.preventDefault();

  queryEl = event.target.elements.quary.value.trim();
  pageEl = 1;

  watchLoader();

  refs.galleryList.innerHTML = '';
  const userTag = event.currentTarget.elements.input.value.trim();

  if (!userTag) {
    return beError(writeSomething);
  }

  try {
    const answer = pixabayApi(userTag);
    renderGallery(answer);
  } catch (error) {
    beError(noImagesError);
  } finally {
    offLoader();
  }
  refs.form.reset();
}
