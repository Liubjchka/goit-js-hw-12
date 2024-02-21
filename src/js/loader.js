import { refs } from './refs';

export function watchLoader() {
  refs.loader.classList.remove('hidden');
}

export function offLoader() {
  refs.loader.classList.add('hidden');
}
