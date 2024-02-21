export function markup(image) {
  return `<li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img
            src="${image.webformatURL}"
            class="gallery-image"
            alt="${image.tags}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${image.likes}</span></div>
            <div class="description-item"><p>Downloads</p><span>${image.downloads}</span></div>
            <div class="description-item"><p>Views</p><span>${image.views}</span></div>
            <div class="description-item"><p>Comments</p><span>${image.comments}</span></div>
        </div>
      </li>`;
}
