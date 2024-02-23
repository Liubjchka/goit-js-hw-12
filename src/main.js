import { pixabayApi } from './js/pixabayApi.js';
import { refs } from './js/refs.js';
import { onLoader } from './js/switchBtn.js';
import { offLoader } from './js/switchBtn.js';
import { offBtnLoadMore } from './js/switchBtn.js';
import { onBtnLoadMore } from './js/switchBtn.js';
import { renderGallery } from './js/renderGallery.js';
import { beError } from './js/beError.js';
import { noImagesError } from './js/beError.js';
import { writeSomething } from './js/beError.js';
import { endSearchesRults } from './js/beError.js';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMore.addEventListener('click', onLoadMore);

let userTag = '';
let page = 1;
const perPage = 15;

// ===========onFormSubmit===========

async function onFormSubmit(event) {
  event.preventDefault();

  page += 1;

  refs.galleryList.innerHTML = '';
  userTag = event.currentTarget.elements.input.value.trim();

  if (!userTag) {
    refs.form.elements.input.value = '';
    beError(writeSomething);
    return;
  }

  onLoader();

  try {
    const answer = await pixabayApi(userTag, page, perPage);
    renderGallery(answer);
    statusBtn(answer, page);
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
    const answer = await pixabayApi(userTag, page, perPage);
    renderGallery(answer);
    scrollPage();
    offLoader();
  } catch (error) {
    beError(noImagesError);
  }
}

function scrollPage() {
  if (searchParams.page > 1) {
    const rect = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({ top: rect.height * 2, left: 0, behavior: 'smooth' });
  }
}

// ===========onLoadMore===========

function statusBtn(data, page) {
  const maxPage = Math.ceil(data.totalHits / 15);

  if (maxPage <= page) {
    offBtnLoadMore();
    offLoader();
    beError(endSearchesRults);
  } else {
    onLoadMore();
    onBtnLoadMore();
  }
}
