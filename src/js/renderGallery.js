import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './refs';
import { markup } from './markup';
import { onBtnLoadMore } from './switchBtn';

export function renderGallery(answer) {
  const result = answer.hits.map(markup).join('');

  refs.galleryList.insertAdjacentHTML('beforeend', result);

  if (answer.hits.length >= 15) {
    onBtnLoadMore();
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionsData: 'alt',
  });

  lightbox.refresh();
}
