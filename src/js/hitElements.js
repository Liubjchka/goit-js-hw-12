function hitElement(hit) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    downloads,
    views,
    comments,
  } = hit;
  return `<li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img
            src="${webformatURL}"
            class="gallery-image"
            alt="${tags}"
          />
        </a>
        <div class="description">
            <div class="description-item"><p>Likes</p><span>${likes}</span></div>
            <div class="description-item"><p>Downloads</p><span>${downloads}</span></div>
            <div class="description-item"><p>Views</p><span>${views}</span></div>
            <div class="description-item"><p>Comments</p><span>${comments}</span></div>
        </div>
      </li>`;
}
// Приймаємо об'єкт hit та масив hits (значення з нетворку)
export function hitElements(hits) {
  return hits.map(hitElement).join('');
}
