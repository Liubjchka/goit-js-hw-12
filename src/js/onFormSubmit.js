import { refs } from './refs';
import { pixabayApi } from './pixabayApi';
import { beError } from './beError';
import { watchLoader, offLoader } from './loader.js';
import { renderGallary } from './renderGallary';

export async function onFormSubmit(event) {
  event.preventDefault();

  watchLoader();

  refs.galleryList.innerHTML = '';
  const userTag = event.currentTarget.elements.input.value.trim();

  try {
    const answer = await pixabayApi(userTag);
    renderGallary(answer);
  } catch (error) {
    beError();
  } finally {
    await offLoader();
  }
  refs.form.reset();
}
