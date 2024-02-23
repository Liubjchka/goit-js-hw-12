import { refs } from './refs';

export function onLoader() {
  refs.loader.classList.remove('hidden');
}

export function offLoader() {
  refs.loader.classList.add('hidden');
}

export function offBtnLoadMore() {
  refs.btnLoadMore.classList.add('hidden');
}
export function onBtnLoadMore() {
  refs.btnLoadMore.classList.remove('hidden');
}
