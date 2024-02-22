import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './refs';
import { beError } from './beError';
import { markup } from './markup';
import { noImagesError } from './beError';

export function renderGallery(answer) {
  const result = answer.hits.map(markup).join('');

  if (answer.hits.length) {
    refs.galleryList.insertAdjacentHTML('beforeend', result);

    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionSelector: 'img',
      captionPosition: 'bottom',
      captionsData: 'alt',
    });
    lightbox.on('show.simplelightbox');
    lightbox.refresh();
  } else {
    beError(noImagesError);
  }
}
