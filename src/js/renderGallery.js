import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './refs';
import { markup } from './markup';

export function renderGallery(answer) {
  const result = answer.data.map(markup).join('');
  if (totalHits > perPage) {
    refs.loadMore.classList.remove('hidden');
  }
  if (answer.data.length) {
    refs.galleryList.insertAdjacentHTML('beforeend', result);

    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: 'img',
      captionPosition: 'bottom',
    });

    lightbox.refresh();
  }
}
